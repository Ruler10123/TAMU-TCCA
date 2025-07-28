import fs from "fs";
import path from "path";

// Function to convert JSON to CSV
function convertJsonToCsv() {
  try {
    // Read the JSON file
    const jsonFilePath = path.join(
      process.cwd(),
      "data",
      "contact-submissions.json"
    );

    if (!fs.existsSync(jsonFilePath)) {
      console.log(
        "No contact submissions file found. Run the contact form first to generate data."
      );
      return;
    }

    const jsonData = fs.readFileSync(jsonFilePath, "utf8");

    // Split by lines and parse each JSON object
    const lines = jsonData.trim().split("\n");
    const submissions = lines.map((line) => JSON.parse(line));

    if (submissions.length === 0) {
      console.log("No submissions found in the file.");
      return;
    }

    // Create CSV header
    const headers = ["Timestamp", "Name", "Email", "Interest", "Message"];
    let csvContent = headers.join(",") + "\n";

    // Add data rows
    submissions.forEach((submission) => {
      const row = [
        `"${submission.timestamp}"`,
        `"${submission.name}"`,
        `"${submission.email}"`,
        `"${submission.interest}"`,
        `"${submission.message.replace(/"/g, '""')}"`, // Escape quotes in message
      ];
      csvContent += row.join(",") + "\n";
    });

    // Write CSV file
    const csvFilePath = path.join(
      process.cwd(),
      "data",
      "contact-submissions.csv"
    );
    fs.writeFileSync(csvFilePath, csvContent);

    console.log(
      `✅ Successfully converted ${submissions.length} submissions to CSV!`
    );
    console.log(`📁 CSV file saved to: ${csvFilePath}`);
    console.log("\n📋 To import into Google Sheets:");
    console.log("1. Open your Google Sheet");
    console.log("2. Go to File > Import");
    console.log("3. Upload the CSV file");
    console.log('4. Choose "Replace current sheet" or "Insert new sheet"');
  } catch (error) {
    console.error("❌ Error converting JSON to CSV:", error.message);
  }
}

// Run the conversion
convertJsonToCsv();
