"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const snippets_controller_1 = require("./snippets.controller");
const router = express_1.default.Router();
router.get('/', snippets_controller_1.SnippetsController.list);
module.exports = router;
