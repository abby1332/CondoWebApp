const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { PDFDocument, StandardFonts } = require('pdf-lib');

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

app.post('/api', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            contactNumber,
            email,
            checkIn,
            checkOut,
            buildingNo,
            vehicleMake,
            vehicleColor,
            vehiclePlate,
            vehicleState
        } = req.body;

        // Format check-in and check-out into Month / Day / Year parts
        const splitDate = (dateStr) => {
            if (!dateStr) return { month: '', day: '', year: '' };
            const [year, month, day] = dateStr.split('-');
            return { month, day, year };
        };
        const checkInParts = splitDate(checkIn);
        const checkOutParts = splitDate(checkOut);

        const pdfPath = path.join(__dirname, 'Parking Pass.pdf');
        const existingPdfBytes = fs.readFileSync(pdfPath);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const form = pdfDoc.getForm();

        // Fill form fields
        form.getTextField('Text1').setText(buildingNo);
        form.getTextField('Text2').setText(`${firstName} ${lastName}`);
        form.getTextField('Text3').setText(`${contactNumber}, ${email}`);
        form.getTextField('Text4').setText(`${vehicleMake}, ${vehicleColor}`);
        form.getTextField('Text5').setText(vehiclePlate);
        form.getTextField('Text6').setText(vehicleState);

        // Set individual fields for dates
        form.getTextField('Text7').setText(checkInParts.month);
        form.getTextField('Text9').setText(checkInParts.day);
        form.getTextField('Text10').setText(checkInParts.year);
        form.getTextField('Text8').setText(checkOutParts.month);
        form.getTextField('Text11').setText(checkOutParts.day);
        form.getTextField('Text12').setText(checkOutParts.year);

        // Embed font and update appearances
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        form.getFields().forEach(field => {
            field.updateAppearances(font);

            if (field.constructor.name === 'PDFTextField') {
                const fieldName = field.getName();
                form.getTextField(fieldName).setFontSize(16);
            }
        });

        //Makes fields uneditable
        form.flatten();

        const pdfBytes = await pdfDoc.save();

        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename=parking-pass.pdf',
        });

        res.send(Buffer.from(pdfBytes));
    } catch (error) {
        console.error(error);
        res.status(500).send('PDF generation failed');
    }
});
