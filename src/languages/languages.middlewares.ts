import { prisma } from '../services/prisma';

export async function languageValidator(languageId: string): Promise<any> {
    if (languageId !== undefined) {
        prisma.language.findUnique({
            where: {
                id: parseInt(languageId),
            },
        }).then((value) => {
            if (value != null) {
                return true;
            } else {
                throw new Error("Language not found!");
            }
    })
    }
}