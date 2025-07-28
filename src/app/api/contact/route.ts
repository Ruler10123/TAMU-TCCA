import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, appendFileSync } from 'fs';
import { join } from 'path';

// Google Apps Script Web App URL (optional)
const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, interest } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data
    const timestamp = new Date().toISOString();
    const formData = {
      timestamp,
      name,
      email,
      interest,
      message
    };

    // Log to console for debugging
    console.log('Form submission received:', formData);

    // Save to local file (optional - for development)
    try {
      const dataDir = join(process.cwd(), 'data');
      const filePath = join(dataDir, 'contact-submissions.json');
      
      // Create data directory if it doesn't exist
      const fs = require('fs');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      // Append to file
      const entry = JSON.stringify(formData) + '\n';
      appendFileSync(filePath, entry);
      console.log('Data saved to local file:', filePath);
    } catch (fileError) {
      console.log('Could not save to local file (this is normal in production):', (fileError as Error).message);
    }

    // Try Google Apps Script if URL is provided
    if (GOOGLE_APPS_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          const errorData = await response.text();
          console.error('Google Apps Script error:', errorData);
          // Don't fail the request, just log the error
        } else {
          console.log('Data successfully sent to Google Sheets');
        }
      } catch (scriptError) {
        console.error('Google Apps Script request failed:', scriptError);
        // Don't fail the request, just log the error
      }
    } else {
      console.log('No Google Apps Script URL configured - data logged locally only');
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 