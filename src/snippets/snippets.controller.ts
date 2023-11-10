import { NextFunction, Request, Response } from "express";
import { prisma } from "../services/prisma";
import { validationResult } from "express-validator";

export class SnippetsController {
    static async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        console.log(" => ", req.session);
        const result = validationResult(req);
        console.log(" => ", result);
        if (!result.isEmpty()){
            throw new Error(result.array()[0].msg);
        }
        

        let snippets;

        if (req.query.lang !== null && req.query.lang !== undefined) {
            snippets = await prisma.snippet.findMany({
                where: { languageId: parseInt(req.query.lang as string)},
                include: { language: true }
            });
        } else {
            snippets = await prisma.snippet.findMany({
                include: { language: true }
            });
        }

        res.render('./snippets/snippets_list', { snippets: snippets });
        next();
    }
}