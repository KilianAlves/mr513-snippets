import { NextFunction, Request, Response } from "express";
import { prisma } from "../services/prisma";
export class LanguagesController {
    static async list(req: Request, res: Response, next: NextFunction): Promise<void> {

        const languages = await prisma.language.findMany({
            include: { 
                _count: {
                    select : {snippets: true },
                }
                }
        });

        res.render('./languages/languages_list',  { languages: languages});
        next();
    }
} 