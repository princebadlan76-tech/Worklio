const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { compressImage, mergePDFs } = require('../controllers/fileController');

// Image Compressor Route (Single File)
router.post('/compress-image', upload.single('image'), compressImage);

// PDF Merger Route (Multiple Files, Max 5 PDFs at once)
router.post('/merge-pdf', upload.array('pdfs', 5), mergePDFs);

module.exports = router;
