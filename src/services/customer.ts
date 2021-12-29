import { Request, Response } from 'express';
import fs from 'fs';
import { StatusCodes } from 'http-status-codes';

interface customer {
    name: string;
    email: string;
    contact: string;
    address: { houseNumber: number; streetName: number; city: string; state: string; country: string }
}

export const custDetails = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;

    const custObj: customer = {
        name: data.name,
        email: data.email,
        contact: data.contact,
        address: {
            houseNumber: data.address.houseNumber,
            streetName: data.address.streetName,
            city: data.address.city,
            state: data.address.state,
            country: data.address.country.name,
        }
    };

    fs.appendFileSync("customers.txt", JSON.stringify(custObj) + `\r\n`)

    return res.status(StatusCodes.CREATED).json({ success: true, message: "Data added successfully", data: custObj });
}
