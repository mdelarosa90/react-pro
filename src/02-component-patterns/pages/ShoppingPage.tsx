import React from 'react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{ count: 4, maxCount: 10 }}
        className="bg-dark text-white">
        {
          ({reset, increaseBy, isMaxCountReached, count, maxCount}) => (
            <>
              <ProductImage style={{ boxShadow: "10px 10px 10px rgba(0,0,0, 0.2)" }} className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
              <span>{count} - {maxCount} </span>
              
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
