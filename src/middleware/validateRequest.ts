import { NextFunction, Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import { validationResult } from 'express-validator';

export function validateRequest(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(StatusCodes.OK).json({ success: false, errors: errors.array() })
    }
    next();
}


// return res.status(StatusCodes.CREATED).json({ success: true, message: "Data added successfully", data: custObj });