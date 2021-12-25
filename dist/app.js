"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
//settings
app.set("port", process.env.PORT || 3000);
//routes
app.use(auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map