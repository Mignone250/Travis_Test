import Joi from 'joi';
const validatelogin= (user) => {
    const validation = {
        title:Joi.string().min(3).required(),
        content:Joi.string().min(8).required()
    };

    return Joi.validate(user, validation);
};
module.exports=validatelogin;