
const router = require("express").Router();
const {
  create,
  viewAll,
  viewById,
  update,
  deleteBlog,
} = require("../controller/blogController");
const upload = require("../util/fileUpload");

router.post("/blogs", upload.single("blog_image"), create);
router.get("/blogs", viewAll);
router.get("/blogs/:id", viewById);
router.patch("/blogs/:id", upload.single("blog_image"), update); // Allow updating the image
router.delete("/blogs/:id", deleteBlog);

module.exports = router;
