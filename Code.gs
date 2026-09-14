/**
 * Google Apps Script Backend for Circuit Overseer Visit Schedule
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet in Google Drive.
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any code in the editor and paste this ENTIRE file into Code.gs.
 * 4. Click "Save" (disk icon).
 * 5. Click "Deploy" > "New deployment".
 *    - Select type (gear icon): "Web app"
 *    - Description: "CO Visit Schedule Backend"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (Required so your GitHub Pages site can read/write data)
 * 6. Click "Deploy", review and grant permissions.
 * 7. Copy the "Web app URL" (ending in /exec) and paste it into index.html for GOOGLE_SCRIPT_URL.
 */

const SHEET_NAMES = {
  SCHEDULE: "Schedule",
  TERRITORY: "Territory",
  MEETINGS: "Meetings",
  HOSPITALITY: "Hospitality"
};

/**
 * Handles GET requests: returns all 4 datasets as a JSON object
 */
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    const scheduleData = readSheetData(ss.getSheetByName(SHEET_NAMES.SCHEDULE));
    const territoryData = readSheetData(ss.getSheetByName(SHEET_NAMES.TERRITORY));
    const meetingsData = readSheetData(ss.getSheetByName(SHEET_NAMES.MEETINGS));
    const hospitalityData = readSheetData(ss.getSheetByName(SHEET_NAMES.HOSPITALITY));

    const responseData = {
      status: "success",
      timestamp: new Date().toISOString(),
      SCHEDULE_DATA: scheduleData,
      TERRITORY_DATA: territoryData,
      MEETINGS_DATA: meetingsData,
      HOSPITALITY_DATA: hospitalityData
    };

    return ContentService.createTextOutput(JSON.stringify(responseData))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles POST requests: saves updated datasets to the Google Sheet
 */
function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let body = {};
    
    if (e && e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    } else {
      throw new Error("No data received in POST body");
    }

    // Update whichever datasets were provided
    if (body.SCHEDULE_DATA && Array.isArray(body.SCHEDULE_DATA)) {
      writeSheetData(ss.getSheetByName(SHEET_NAMES.SCHEDULE), body.SCHEDULE_DATA);
    }
    if (body.TERRITORY_DATA && Array.isArray(body.TERRITORY_DATA)) {
      writeSheetData(ss.getSheetByName(SHEET_NAMES.TERRITORY), body.TERRITORY_DATA);
    }
    if (body.MEETINGS_DATA && Array.isArray(body.MEETINGS_DATA)) {
      writeSheetData(ss.getSheetByName(SHEET_NAMES.MEETINGS), body.MEETINGS_DATA);
    }
    if (body.HOSPITALITY_DATA && Array.isArray(body.HOSPITALITY_DATA)) {
      writeSheetData(ss.getSheetByName(SHEET_NAMES.HOSPITALITY), body.HOSPITALITY_DATA);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Data successfully saved to Google Sheet",
      timestamp: new Date().toISOString()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Reads a sheet where row 1 is the header names, and returns an array of JS objects
 */
function readSheetData(sheet) {
  if (!sheet) return [];
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  if (lastRow < 2 || lastCol < 1) return [];

  // getDisplayValues returns clean cell text formatted as strings, preventing raw Date GMT objects
  const values = sheet.getRange(1, 1, lastRow, lastCol).getDisplayValues();
  const headers = values[0];
  const items = [];

  for (let r = 1; r < values.length; r++) {
    const row = values[r];
    // Check if row is completely empty
    const hasValue = row.some(cell => cell !== "" && cell !== null && cell !== undefined);
    if (!hasValue) continue;

    const item = {};
    for (let c = 0; c < headers.length; c++) {
      const headerKey = String(headers[c]).trim();
      if (!headerKey) continue;
      let val = row[c] !== null && row[c] !== undefined ? String(row[c]).trim() : "";

      // Clean up if it was serialized as a long GMT date string
      if (headerKey === "fullDate" && (val.includes("GMT") || val.includes("Standard na Oras") || val.includes("00:00"))) {
        const d = new Date(val);
        if (!isNaN(d.getTime())) {
          const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          val = months[d.getMonth()] + " " + d.getDate();
        }
      }
      item[headerKey] = val;
    }
    items.push(item);
  }

  return items;
}

/**
 * Writes an array of objects to a sheet, preserving the header row (Row 1)
 */
function writeSheetData(sheet, dataArray) {
  if (!sheet) return;
  const lastCol = sheet.getLastColumn();
  if (lastCol < 1) return;

  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(h => String(h).trim());

  // Clear existing data rows (from row 2 down)
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, lastCol).clearContent();
  }

  if (!dataArray || dataArray.length === 0) return;

  // Build 2D values array matching header columns
  const rows = dataArray.map(item => {
    return headers.map(headerKey => {
      const val = item[headerKey];
      return val !== undefined && val !== null ? String(val) : "";
    });
  });

  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
}

/**
 * Quick Test function to run inside Apps Script Editor to verify reading works
 */
function testDoGet() {
  const result = doGet({});
  Logger.log(result.getContent());
}
