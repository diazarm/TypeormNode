"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv").config();
const app_1 = __importDefault(require("./app"));
const port = 3000;
app_1.default.listen(port, () => {
    console.log(`Server in listening on port ${port}`);
});
//nota : la compilacion se hace manual con tsc y eso nos permite luego usar node build/index.js
