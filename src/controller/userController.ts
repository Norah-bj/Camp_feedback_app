import User from "../models/user";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

export const registerUser = async(req: Request, res: Response) => {
    try {
        const findEmail = await User.findOne({email: req.body.email});
        if(findEmail){
            return res.status(400).json({
                status: 400,
                data: null,
                message: "Email already exists"
            })
        }
        const { fullName, email, password, role} = req.body;
        // if(!fullName || !email || !password){
        //     return 
        // }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            role
        })
        return res.status(201).json({
            status: 200,
            data: null,
            message: "User created successfully"
        })
    } catch (error) {
        const err = error instanceof Error;

        return res.status(500).json({
            status: 500,
            data: null,
            message: err ? error?.message : "Unexcpected error occurred"
        })
    }
}