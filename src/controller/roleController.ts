import { Role } from "../models/role";
import { Request, Response } from "express";


export const createRole = async(req: Request, res: Response) => {
    try {
                console.log("=======================================")

        const { name, description } = req.body;

        if(!name){
            return res.status(400).json({
                status:400,
                message: 'Name is required',
                data: null
            })
        }

        const insertRole = new Role({
            name,
            description
        })

        await insertRole.save();

        return res.status(201).json({
            status:201,
            message: 'Role created successfully',
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