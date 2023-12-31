

class ProductManager {

    #products

    constructor() {
        this.#products = []
    };

    getProducts() {
        return this.#products
    };

    getProductsById(id) {
        return this.#products.find((product) => product.id === id);
    };

    #areFieldComplete(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Por favor, completa todos los campos.");
            return false;

        } else {
            return true;
        };
    };

    #isNotDuplicate(code) {
        if (this.#products.find((product) => product.code === code) !== undefined) {
            console.error("El codigo ya existe, posible producto duplicado.");
            return false;
        } else {
            return true;
        };
    };

    #idGenerator() {
        let id = 0;
        if (this.#products.length === 0) {
            id = 1;
        } else {
            id = this.#products[this.#products.length - 1].id + 1;
        };
        return id;
    };

    addProduct(title, description, price, thumbnail, code, stock) {

        if (this.#areFieldComplete(title, description, price, thumbnail, code, stock) && this.#isNotDuplicate(code)) {
            const newProduct = {
                id: this.#idGenerator(),
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }
            this.#products.push(newProduct);
        };
    };
};

const productManagerInstance = new ProductManager();

productManagerInstance.addProduct("producto prueba 1", "Este es un producto prueba 1", 200, "Sin imagen", "abc121", 25);
productManagerInstance.addProduct("producto prueba 2", "Este es un producto prueba 1", 200, "Sin imagen", "abc122", 25);
productManagerInstance.addProduct("producto prueba 3", "Este es un producto prueba 1", 200, "Sin imagen", "abc122", 25);
productManagerInstance.addProduct("producto prueba 6", "Este es un producto prueba 1", 200, "Sin imagen", "abc126", 25);
productManagerInstance.addProduct("producto prueba 7", "Este es un producto prueba 1", 200, "Sin imagen", "abc127", 25);
productManagerInstance.addProduct("producto prueba 8", "Este es un producto prueba 1", 200, "Sin imagen", "abc128", 25);
productManagerInstance.addProduct("producto prueba 9", "Este es un producto prueba 1", 200, "Sin imagen", "abc129", 25);
productManagerInstance.addProduct("producto prueba 10", "Este es un producto prueba 1", 200, "Sin imagen", "abc1210", 25);



productManagerInstance.addProduct("producto prueba 4", "Este es un producto prueba 1", 200, "Sin imagen", "abc124", 25);


productManagerInstance.addProduct("producto prueba 5", "Este es un producto prueba 1", 200, "Sin imagen", 25);





console.log(productManagerInstance.getProductsById(6))