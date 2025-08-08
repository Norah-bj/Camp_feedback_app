import { Role } from "../models/role";
import { Request, Response } from "express";


export const createRole = async(req: Request, res: Response) => {
    try {
                
        const role = new Role(req.body);
        console.log("ROLE DATA: ", req.body);
        await role.save();

        if(!role.name){
            console.log("=======================================")
            return res.status(400).json({
                status:400,
                message: 'Name is required',
                data: null
            })
        }

        return res.status(201).json({
            status:201,
            message: 'Role create successfully',
            data: null
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message: error instanceof Error ? error?.message: 'Unexpected error occurred',
            data: null   
        })
    }
}

export const getAllRoles = async(req: Request, res: Response) => {
    try {

        const allRoles = await Role.find();
        return res.status(200).json({
            status:200,
            message: 'All roles fetched successfully',
            data: allRoles
        })
        
    } catch (error) {
        return res.status(500).json({
            status:500,
            message: error instanceof Error ? error?.message: 'Unexpected error occurred',
            data: null   
        })
    }
}