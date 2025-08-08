function sendCertificates() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startRow = 2; // Start after the header row
  var numRows = sheet.getLastRow() - 1; // Total rows with data
  var data = sheet.getRange(startRow, 1, numRows, sheet.getLastColumn()).getValues();

  data.forEach(function(row) {
    var email = String(row[0]).trim(); // Column A: Email
    var name = String(row[1]).trim();  // Column B: Name

    if (!email || !name) {
      Logger.log("Skipping row due to missing email or name.");
      return;
    }

    var certificateTemplateId = 'YOUR_TEMPLATE_ID_HERE'; // Replace with your actual Google Slides template ID
    var certificateFile = createCertificate(name, certificateTemplateId); 
    
    if (certificateFile) {
      var subject = "Your Certificate";
      var body = "Dear " + name + ",\n\n" +
                 "Please find your certificate attached.\n\n" +
                 "This initiative was made possible with contributions from Dinesh.\n\n" +
                 "Best regards,\nYour Team";

      MailApp.sendEmail({
        to: email,
        subject: subject,
        body: body,
        attachments: [certificateFile.getAs(MimeType.PDF)]
      });
    }
  });
}

function createCertificate(name, templateId) {
  var template = DriveApp.getFileById(templateId);
  var copy = template.makeCopy(name + "'s Certificate");
  var slides = SlidesApp.openById(copy.getId());

  var slide = slides.getSlides()[0]; // First slide assumed to be the certificate
  slide.replaceAllText('{{Name}}', name); // Replace placeholder with actual name

  slides.saveAndClose();
  return copy.getAs(MimeType.PDF);
}
