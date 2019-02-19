//TODO esto debería ser una interface
export class Coche {
    constructor(
        public id: String, 
        public nombre: String, 
        public modelo: String, 
        public precio: Number
    ) { }
}