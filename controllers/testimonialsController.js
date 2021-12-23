const { response } = require('express');
const Testemonial = require('./../models/Testimonial');

exports.createTestimonial = async (req, res) => {
    
    const testimonial = new Testemonial ({
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
        comments: req.body.comments,
        image: req.file.path
    })
    await testimonial.save();
    res.send('Testimonial is inserted succesfully!');
}
  
exports.getAllTestimonials = async(req, res) => {
    const testimonials = await Testemonial.findAll();
    res.send(testimonials);
}

exports.getAllTestimonialImage = async(req, res) => {

    const requestedId = req.params.id;
    const testimonial = await Testemonial.findOne({where: {id: requestedId}})

    const checkStringn = 'uploads\\';
    if (testimonial.image.startsWith(checkStringn)) {
        const image = testimonial.image.substring(checkStringn.length)

        res.sendFile(image, {root:"uploads"});
    }
}

exports.getAllTestimonialVideos = async(req, res) => {

    const requestedId = req.params.id;
    const testimonial = await Testemonial.findOne({where: {id: requestedId}})

    const checkStringn = 'uploads\\';
    if (testimonial.video.startsWith(checkStringn)) {
        const video = testimonial.video.substring(checkStringn.length)
        res.sendFile(video, {root:"uploads"});
    }
}