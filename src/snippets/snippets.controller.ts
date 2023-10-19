import { NextFunction, Request, Response } from 'express';
import { prisma } from '../services/prima';

export class SnippetsController {

    static async list(req: Request, res: Response, next: NextFunction): Promise<void> {

        const lang = req.query.lang;


        // snippets en fonction du id de language
        if (lang == undefined) {
            const snippets = await prisma.snippet.findMany(
                {
                    include: {
                        language: true,
                    }
                });
            res.render('snippets/snippets_list', {'snippets': snippets});
        } else {
            const snippets = await prisma.snippet.findMany(
                {
                    include: {
                        language: true,
                    },
                    where: {
                        languageId: Number(lang)
                    }
                });
            res.render('snippets/snippets_list', {'snippets': snippets});
        }
    }
}
