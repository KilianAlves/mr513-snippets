import { NextFunction, Request, Response } from "express";

export class AuthController {
    static loginForm(req: Request, res: Response, next: NextFunction) {
        res.render('./auth/login');
        next();
    }
}