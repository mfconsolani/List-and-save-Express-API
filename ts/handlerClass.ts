import { Request, Response } from 'express';

export interface Product {
    title: string,
    price: number,
    thumbnail: string,
    id: number
}

class MetodosServidor{

    database: Array<Product>;
    
    constructor(database:Array<Product>){

        this.database = database;
    };
    
    displayAll(response: Response){
        this.database.length 
        ? response.json(this.database) 
        : response.status(200).json({ alerta: 'no hay productos cargados' })
    }

    displayOne(request: Request, response: Response){

        let { id }:any = request.params

        id = parseInt(id)

        if (id <= this.database.length && id !== 0){

            const productSearched = this.database.filter((product: Product) => product.id === id)
            
            return response.status(200).json(productSearched)
        } 
        return response.status(200).send({ alerta: 'producto no encontrado' })
    }

    saveProduct(request: Request, response: Response){

        const nuevoItem: Product =  { 
            ...request.body,
            id: this.database.length + 1
        };
    
        this.database.push(nuevoItem)
     
        response.status(201).json(nuevoItem)

    }
};

export default MetodosServidor;