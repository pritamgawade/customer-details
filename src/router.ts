import { Router } from 'express';
import { custDetails } from './services/customer';
import { validators } from './validations/customerValidations';
import { validateRequest } from './middleware/validateRequest';
const router = Router();

router
    .post('/customers/add', validators, validateRequest, custDetails)

export default router;