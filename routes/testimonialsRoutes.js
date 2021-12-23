const express = require("express");
const testimonialsController = require ('../controllers/testimonialsController');
const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: fileStorage})

const router = express.Router();

router.route('/testimonials').get(testimonialsController.getAllTestimonials).post(upload.single('image'), testimonialsController.createTestimonial)
router.route('/testimonials/:id').get(testimonialsController.getAllTestimonialImage)
router.route('/testimonialsVideo/:id').get(testimonialsController.getAllTestimonialVideos)

module.exports = router;