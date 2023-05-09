"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const mockData = [
    {
        name: "Barry Meadows",
        email: "BMeadows@BarryCo.com"
    },
    {
        name: "Solomn Grundy",
        email: "SGrundy@grundycorp.com"
    }
];
//GET endpoints
app.get('/', (req, res) => {
    res.send(mockData);
});
//Post endpoint
app.post('/api/create', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({
        name: name,
        email: email
    });
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
