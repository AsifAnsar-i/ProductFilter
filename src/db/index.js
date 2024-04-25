"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var vector_1 = require("@upstash/vector");
var dotenv = require("dotenv");
dotenv.config();
exports.db = new vector_1.Index();
