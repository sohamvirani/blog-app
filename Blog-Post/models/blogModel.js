

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  blog_image: {
    type: String,
    required: true, 
  },
  blog_title: {
    type: String,
    required: true,
  },
  blog_description: {
    type: String,
    required: true,
  },
  about_blog: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Blog', blogSchema);

