import express, { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { LanguagesController } from './languages.controller';

const router: Router = express.Router();

router.get('/',
expressAsyncHandler(LanguagesController.list));

export = router;