
import { body, check } from 'express-validator';
const validators = [
    body('email').isEmail().withMessage('email must contain a valid email address'),
    body('name').notEmpty().withMessage('name is required'),
    check('contact').notEmpty().not()
        .custom((val) => /[^0-9\s]/g.test(val))
        .withMessage('Contact must contain numbers only'),
    body('address.streetName').notEmpty().withMessage('streetName is required'),
    check('address.houseNumber').not()
        .custom((val) => /[^0-9\s]/g.test(val))
        .withMessage('houseNumber must contain numbers only'),
]

export { validators };