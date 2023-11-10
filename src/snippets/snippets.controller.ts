import { Request, Response } from "express";
import { prisma } from "../services/prisma";

export class SnippetsController {
    static async list(req: Request, res: Response): Promise<void> {
        console.log(req.session);

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
    }
}