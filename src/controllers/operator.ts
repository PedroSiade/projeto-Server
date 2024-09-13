import { Request, Response } from "express";
import { prisma } from "../server";

export const createOperator = async (request: Request, response: Response) => {
    try{
        const {name} = request.body;
        const newOperator= await prisma.operator.create({
            data: {
                name
            }
        })
        response.status(200).json(newOperator);

    }
    catch(err){
        response.status(500).json({error: err});
    }
}
export const readOperators = async (req: Request, res: Response) => {
    try {
        const blogOperator = await  prisma.operator.findMany({
        })
        res.status(200).json(blogOperator);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}

export const  getOneOperator = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const blogOperator = await  prisma.operator.findUnique({
            where: {
                id: Number(id),
            }
        })
        res.status(200).json(blogOperator);

    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}

export const updateOperator = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const {id}  = req.params;
        const newOperator = await prisma.operator.update({
            where:{
                id:Number(id),

            },
            data: {
                name
            },

        })
        res.status(200).json(newOperator);
    } catch (e) {
        res.status(500).json({ error: e });
    }
}


export const deleteOperator = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleteOperator = await  prisma.operator.delete({
            where:{
                id: Number(id),
            }
        })
        res.status(200).json(deleteOperator);
    }
    catch (e) {
        res.status(500).json({ error: e });
    }
}


