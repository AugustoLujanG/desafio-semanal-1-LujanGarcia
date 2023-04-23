class ProductManager {
constructor() {
    this.products = [];
    this.productIdCounter = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    // Validar que no se repita el código
    const codeAlreadyExists = this.products.some(
      (product) => product.code === code
    );
    if (codeAlreadyExists) {
      console.log(`Ya existe un producto con el código ${code}`);
      return;
    }

    // Agregar el producto al arreglo con un id autoincrementable
    const newProduct = {
      id: this.productIdCounter++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(newProduct);
    console.log(`Producto "${newProduct.title}" agregado con éxito`);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.log("Producto no encontrado");
    }
  }
}

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Llamar al método getProducts recién creada la instancia, debe devolver un arreglo vacío []
const products = productManager.getProducts();
console.log(products);

// Llamar al método addProduct con los campos especificados
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Verificar que el objeto se haya agregado satisfactoriamente
const updatedProducts = productManager.getProducts();
console.log(updatedProducts);

// Llamar al método addProduct con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
productManager.addProduct("producto repetido", "Este es un producto repetido", 100, "Sin imagen", "abc123", 10);

// Verificar que el objeto no se haya agregado nuevamente
const updatedProducts2 = productManager.getProducts();
console.log(updatedProducts2);

// Llamar al método getProductById con un id que no existe
const notFoundProduct = productManager.getProductById(2);

// Llamar al método getProductById con el id del producto que se agregó anteriormente
const foundProduct = productManager.getProductById(1);
console.log(foundProduct);
