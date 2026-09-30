const sharp = require('sharp');
const { PDFDocument } = require('pdf-lib');

// @desc    Compress Image (JPG, PNG, WebP)
// @route   POST /api/tools/file/compress-image
const compressImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload an image file' });
    }

    const quality = parseInt(req.body.quality) || 70; // Default 70% quality

    const compressedBuffer = await sharp(req.file.buffer)
      .jpeg({ quality: quality })
      .toBuffer();

    res.set({
      'Content-Type': 'image/jpeg',
      'Content-Disposition': 'attachment; filename="compressed-image.jpg"',
    });

    res.send(compressedBuffer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Merge Multiple PDFs into One
// @route   POST /api/tools/file/merge-pdf
const mergePDFs = async (req, res) => {
  try {
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({ message: 'Please upload at least 2 PDF files to merge' });
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of req.files) {
      const pdf = await PDFDocument.load(file.buffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedPdfBytes = await mergedPdf.save();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="merged-document.pdf"',
    });

    res.send(Buffer.from(mergedPdfBytes));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { compressImage, mergePDFs };
