import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { AuthController } from './auth.controller';

const router: Router = express.Router();

router.get('/login', expressAsyncHandler(AuthController.loginForm));

export = router;