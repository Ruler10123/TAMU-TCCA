# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your contact form using Google Apps Script (much easier than the API approach).

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Add headers in the first row:
   - Column A: Timestamp
   - Column B: Name
   - Column C: Email
   - Column D: Interest
   - Column E: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Replace the default code with this improved script:

```javascript
function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request');
    console.log('Post data:', e.postData.contents);
    
    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet();
    
    // Parse the incoming data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      console.error('Failed to parse JSON:', parseError);
      return ContentService
        .createTextOutput(JSON.stringify({ 
          error: 'Invalid JSON data',
          details: parseError.toString()
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          error: 'Missing required fields: name, email, or message'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name,
      data.email,
      data.interest || 'general',
      data.message
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    console.log('Successfully added row:', rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Script error:', error);
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        error: 'Script execution failed',
        details: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'Script is running',
      message: 'Google Apps Script is deployed and accessible'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** (give it a name like "Contact Form Handler")
4. Click **Deploy** > **New deployment**
5. Choose **Web app** as the type
6. Set **Execute as**: "Me"
7. Set **Who has access**: "Anyone"
8. Click **Deploy**
9. Copy the **Web app URL** that appears

## Step 3: Test Your Google Apps Script

Before configuring your website, test the script:

1. **Test the GET endpoint**: Open your Web app URL in a browser. You should see a JSON response.
2. **Test with curl** (optional):
   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Test message","interest":"general"}' YOUR_WEB_APP_URL
   ```

## Step 4: Configure Environment Variables

Create a `.env.local` file in your project root with:

```
GOOGLE_APPS_SCRIPT_URL=your_web_app_url_here
```

Replace `your_web_app_url_here` with the Web app URL you copied in step 2.

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your Google Sheet to see if the data appears

## Troubleshooting 400 Bad Request

If you're getting 400 errors:

1. **Check the script logs**:
   - Go back to Google Apps Script editor
   - Click "Executions" in the left sidebar
   - Look for any error messages

2. **Verify deployment settings**:
   - Make sure "Who has access" is set to "Anyone"
   - Make sure "Execute as" is set to "Me"

3. **Test the URL directly**:
   - Open your Web app URL in a browser
   - You should see a JSON response

4. **Check the request format**:
   - Make sure your form is sending JSON data
   - Verify the Content-Type header is set to "application/json"

## Security Notes

- The Google Apps Script URL is public, but it only accepts POST requests with the correct data format
- No API keys or complex authentication required
- Much simpler to set up and maintain

## Common Issues

- **400 Bad Request**: Usually means the script isn't deployed correctly or has an error
- **403 Forbidden**: Check that "Who has access" is set to "Anyone"
- **500 Internal Error**: Check the script logs for JavaScript errors 