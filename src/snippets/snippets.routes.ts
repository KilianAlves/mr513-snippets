import express, { Router } from 'express';
import { SnippetsController } from './snippets.controller'
import session from 'express-session';

const router: Router = express.Router();

router.get('/', SnippetsController.list);

export = router;

