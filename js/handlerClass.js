"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetodosServidor {
    constructor(database) {
        this.database = database;
    }
    ;
    displayAll(response) {
        this.database.length
            ? response.json(this.database)
            : response.status(200).json({ alerta: 'no hay productos cargados' });
    }
    displayOne(request, response) {
        let { id } = request.params;
        id = parseInt(id);
        if (id <= this.database.length && id !== 0) {
            const productSearched = this.database.filter((product) => product.id === id);
            return response.status(200).json(productSearched);
        }
        return response.status(200).send({ alerta: 'producto no encontrado' });
    }
    saveProduct(request, response) {
        const nuevoItem = Object.assign(Object.assign({}, request.body), { id: this.database.length + 1 });
        this.database.push(nuevoItem);
        response.status(201).json(nuevoItem);
    }
}
;
exports.default = MetodosServidor;
