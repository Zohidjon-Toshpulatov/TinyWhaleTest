"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Working');
});
app.get('/api/users', (req, res) => {
    let names = req.query.names;
    names = names.split(',');
    names = names.map((name) => name[0].toUpperCase() + name.slice(1));
    names = names.sort((a, b) => a > b ? 1 : -1);
    console.log(names);
    // console.log(Array.isArray(names));
    // let name =names[0]
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Server is working ${port}`);
});
