import express, { Router } from 'express';
import { SnippetsController } from './snippets.controller'
// import session from 'express-session';
import expressAsyncHandler from 'express-async-handler';
import { query } from 'express-validator';
import { languageValidator } from '../languages/languages.middlewares';

const router: Router = express.Router();

router.get('/', 
    query('lang').isNumeric(),
    query('lang').custom((value: string) => languageValidator(value)),
    expressAsyncHandler(SnippetsController.list)
);

export = router;

