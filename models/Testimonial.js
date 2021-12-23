const { Model, DataTypes, Sequelize } = require ('sequelize');
const sequelize = require ('./../database');

class Testimonial extends Model {}


Testimonial.init({
    name:  {
        type: DataTypes.STRING
    },
    age:  {
        type: DataTypes.NUMBER
    },
    location:  {
        type: DataTypes.STRING
    },
    comments:  {
        type: DataTypes.STRING
    },
    video: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'testimonial',
    timestamps: false
})

module.exports =  Testimonial;