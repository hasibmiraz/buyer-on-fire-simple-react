import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const randomNum = Math.ceil(Math.random() * cart.length - 1);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const resetCart = () => {
    setCart([]);
  };

  const selectRandomProduct = () => {
    setSelectedProduct(cart[randomNum]);
  };

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div>
        <Cart
          cart={cart}
          resetCart={resetCart}
          selectRandomProduct={selectRandomProduct}
          selectedProduct={selectedProduct}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
