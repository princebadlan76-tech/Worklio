// @desc    Analyze Text (Word, Character, Sentence Count)
// @route   POST /api/tools/text/analyze
const analyzeText = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text && text !== '') {
      return res.status(400).json({ message: 'Text field is required' });
    }

    const characters = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
    const lines = text ? text.split(/\r\n|\r|\n/).length : 0;

    res.json({
      characters,
      words,
      sentences,
      lines,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Convert Case (Uppercase, Lowercase, Titlecase, Slugify)
// @route   POST /api/tools/text/convert-case
const convertCase = async (req, res) => {
  try {
    const { text, type } = req.body; // type: 'uppercase', 'lowercase', 'titlecase', 'slug'

    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    let result = text;

    switch (type) {
      case 'uppercase':
        result = text.toUpperCase();
        break;
      case 'lowercase':
        result = text.toLowerCase();
        break;
      case 'titlecase':
        result = text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
        break;
      case 'slug':
        result = text
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');
        break;
      default:
        return res.status(400).json({ message: 'Invalid conversion type' });
    }

    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { analyzeText, convertCase };
