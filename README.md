# Certificate Generator using Google Apps Script

This Google Apps Script automates the creation and emailing of personalized certificates using a Google Slides template and a Google Sheet containing student data.

## ✨ Features
- Generates certificates for each student using a Slides template
- Replaces {{Name}} placeholder with actual student name
- Converts the certificate to PDF
- Emails the certificate as an attachment to each student
- Includes formal attribution to *Dinesh*

## 📁 How It Works
1. Prepare a Google Sheet with:
   - Column A: Student Email
   - Column B: Student Name

2. Create a Google Slides certificate template with {{Name}} as the placeholder.

3. Paste the script into the Google Apps Script editor linked to your Sheet.

4. Replace YOUR_TEMPLATE_ID_HERE with your actual Slides template ID.

5. Run the sendCertificates() function.

> ⚠ *Note:*  
> The actual student data used in this project contains private information and is *not included* in this repository. Only the script logic is shared for educational and reference purposes.

## 🛠 Script Overview

```javascript
function sendCertificates() {
  // Reads student data and sends personalized certificates
}

function createCertificate(name, templateId) {
  // Creates a certificate by replacing the name placeholder
}
``` 
Requirements
- Google Sheet with student data
- Google Slides certificate template
- Google Apps Script enabled

👤 Author
Crafted and directed by Dinesh, a meticulous art director and educator, committed to blending visual precision with technical transparency.

📬 Contact
For questions or collaborations, feel free to reach out via GitHub or LinkedIn @pv-dinesh.
`

---
