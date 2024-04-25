"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var dotenv = require("dotenv");
dotenv.config();
var getRandomPrice = function () {
    var PRICES = [9.99, 19.99, 29.99, 39.99, 49.99];
    return PRICES[Math.floor(Math.random() * PRICES.length)];
};
var COLORS = ["white", "beige", "blue", "green", "purple"];
var SIZES = ["S", "M", "L"];
var seed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var products, i, j, k, size, color, SIZE_MAP, COLOR_MAP;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                products = [];
                // 3 example products
                for (i = 0; i < 3; i++) {
                    for (j = 0; j < COLORS.length; j++) {
                        for (k = 0; k < SIZES.length; k++) {
                            size = SIZES[k];
                            color = COLORS[j];
                            products.push({
                                id: "".concat(color, "-").concat(size, "-").concat(i + 1),
                                imageId: "/".concat(color, "_").concat(i + 1, ".png"),
                                color: color,
                                name: "".concat(color.slice(0, 1).toUpperCase() + color.slice(1), " shirt ").concat(i),
                                size: size,
                                price: getRandomPrice(),
                            });
                        }
                    }
                }
                SIZE_MAP = {
                    S: 0,
                    M: 1,
                    L: 2,
                };
                COLOR_MAP = {
                    white: 0,
                    beige: 1,
                    blue: 2,
                    green: 3,
                    purple: 4,
                };
                return [4 /*yield*/, index_1.db.upsert(products.map(function (product) { return ({
                        id: product.id,
                        vector: [COLOR_MAP[product.color], SIZE_MAP[product.size], product.price],
                        metadata: product,
                    }); }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
seed();
