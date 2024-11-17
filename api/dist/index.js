"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bookLoans_1 = __importDefault(require("./endpoints/bookLoans"));
const API_PORT = 8080;
const api = (0, express_1.default)();
api.use((0, cors_1.default)({
    origin: "*",
}));
api.use(express_1.default.json());
api.get("/", (req, res) => {
    res.send("API is up");
});
api.use("/book-loans", bookLoans_1.default);
api.listen(API_PORT, "0.0.0.0", () => {
    console.log(`API running on port ${API_PORT}`);
});
//# sourceMappingURL=index.js.map