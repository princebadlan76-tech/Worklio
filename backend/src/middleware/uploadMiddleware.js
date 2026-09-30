const multer = require('multer');

// Memory storage use kar rahe hain taaki Vercel serverless environment me local file storage ka error na aaye
const storage = multer.memoryStorage();

// File Filter for Security
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf',
    'text/csv'
  ];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file format'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB Max File Size Limit
  },
  fileFilter: fileFilter,
});

module.exports = upload;
