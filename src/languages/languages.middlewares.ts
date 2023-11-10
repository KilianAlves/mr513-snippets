import { prisma } from '../services/prisma';

export async function languageValidator(languageId: string): Promise<any> {
    if (languageId !== undefined) {
        const value = await prisma.language.findUnique({
            where: {
                id: parseInt(languageId),
            },
        });
        if (value === null) {
            throw new Error("Language not found!");
        }
    }
} 