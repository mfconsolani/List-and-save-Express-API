"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlerClass_1 = __importDefault(require("./handlerClass"));
// Server set-up
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
let db = [];
let instance = new handlerClass_1.default(db);
// Get requests
// Listar todos los productos
app.get('/api/productos', (req, res) => {
    instance.displayAll(res);
});
// Listar un producto específico
app.get('/api/productos/:id', (req, res) => {
    instance.displayOne(req, res);
});
// Post requests
// Cargar un nuevo producto
app.post('/api/productos/', (req, res) => {
    instance.saveProduct(req, res);
});
// Server Port config
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`);
});
server.on("Error", (error) => {
    console.log(`Se produjo el siguiente error al inicializar el servidor: ${error}`);
});
