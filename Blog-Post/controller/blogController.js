const blogModel = require("../models/blogModel");

exports.create = async (req, res) => {
  try {
    const blog_image = req?.file?.filename;

    // Check if the image is uploaded
    if (!blog_image) {
      return res.status(400).json({
        success: false,
        message: "Blog image is required",
      });
    }

    const { blog_title, blog_description, about_blog } = req.body;

    const blog = await blogModel.create({
      blog_image,
      blog_title,
      blog_description,
      about_blog,
    });

    if (blog) {
      return res.status(201).json({
        success: true,
        message: "Blog created successfully",
        data: blog,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to create blog",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};



// Get All Blog Posts
exports.viewAll = async (req, res) => {
  try {
    const blogs = await blogModel.find().sort({ createdAt: -1 });

    if (blogs.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Blogs retrieved successfully",
        data: blogs,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No blogs found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

// Get a Blog by ID
exports.viewById = async (req, res) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (blog) {
      return res.status(200).json({
        success: true,
        message: "Blog retrieved successfully",
        data: blog,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

// Update Blog Post
exports.update = async (req, res) => {
  try {
    const blog_image = req?.file?.filename;
    const { blog_title, blog_description, about_blog } = req.body;

    const updatedBlog = await blogModel.findByIdAndUpdate(
      req.params.id,
      {
        blog_image,
        blog_title,
        blog_description,
        about_blog,
      },
      { new: true, runValidators: true } // `new: true` returns the updated document
    );

    if (updatedBlog) {
      return res.status(200).json({
        success: true,
        message: "Blog updated successfully",
        data: updatedBlog,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

// Delete Blog Post
exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await blogModel.findByIdAndDelete(req.params.id);

    if (deletedBlog) {
      return res.status(200).json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};


