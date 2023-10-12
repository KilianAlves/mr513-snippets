import express, { Router } from 'express';
import { SnippetsController } from './snippets.controller'
import session from 'express-session';
import expressAsyncHandler from 'express-async-handler';

const router: Router = express.Router();

router.get('/', 
    expressAsyncHandler(SnippetsController.list)
);

export = router;

