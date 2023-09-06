# Google Sheets CMS

This is a simple CMS that uses Google Sheets as a content repository.

## Setup

1. Create table in Google Sheets:

| id | name | model | country |
| --- | --- | --- | --- |
| 1 | Toyota | Corolla | Japan |
| 2 | Honda | Civic | Japan |
| 3 | Ford | Focus | USA |
| 4 | BMW | 3 Series | Germany |

2. Create a new Google Apps Script project and copy the code from `code.js` file. (Tools > Script editor) and write below code:

```javascript
  function doGet() {
  const doc = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = doc.getSheetByName("Users") //Users is the name of the sheet
  const values = sheet.getRange(1, 1, 4, 4).getDisplayValues() //1 first row, 1 first column, 4 last rows, 4 last columns
  const result = values.map((data) => ({
    id: data[0],
    name: data[1],
    surname: data[2],
    age: data[3],
  }))
  return ContentService.createTextOutput(JSON.stringify({data: result})).setMimeType(ContentService.MimeType.JSON)
}
```

3. Publish the script as a web app (Publish > Deploy as web app) and copy the URL of the web app.

and then you can use the URL in your project. Good luck! :smile:

  