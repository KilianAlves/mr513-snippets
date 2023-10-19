import { NextFunction, Request, Response } from 'express';
import { prisma } from '../services/prima';

export class SnippetsController {

    static async list(req: Request, res: Response, next: NextFunction): Promise<void> {

        const snippets = await prisma.snippet.findMany(
            {
                include: {
                    language: true,
                }
            });
        res.render('snippets/snippets_list', {'snippets': snippets });
    }
}
