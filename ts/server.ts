import express, {Application, Request, Response} from 'express';
import MetodosServidor, { Product } from './handlerClass';

// Server set-up
const app:Application = express();

app.use(express.json())

app.use(express.urlencoded({extended: true}))

let db:Array<Product> = [];

let instance = new MetodosServidor(db);


// Get requests

// Listar todos los productos
app.get('/api/productos', (req: Request, res: Response) => {    
    instance.displayAll(res);
});

// Listar un producto específico
app.get('/api/productos/:id', (req: Request, res: Response) => {
    instance.displayOne(req, res);    
});


// Post requests

// Cargar un nuevo producto
app.post('/api/productos/', (req: Request, res: Response)=> { 
    instance.saveProduct(req, res)
});


// Server Port config

const PORT = 8080;

const server:any = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${server.address().port}`)
});

server.on("Error", (error:Error) => {
    console.log(`Se produjo el siguiente error al inicializar el servidor: ${error}`)
});

