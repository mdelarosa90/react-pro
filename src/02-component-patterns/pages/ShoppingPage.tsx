import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  //img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" img={"https://pbs.twimg.com/profile_images/1477300100506562561/HT58EqTI_400x400.jpg"} />
          <ProductCard.Title title="Café Bar" className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage style={{boxShadow: "10px 10px 10px rgba(0,0,0, 0.2)"}} className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product} style={{background: "#70D1F8"}}>
          <ProductImage style={{boxShadow: "10px 10px 10px rgba(0,0,0, 0.2)"}} />
          <ProductTitle style={{fontSize: "1.25rem", fontWeight: "500"}} />
          <ProductButtons style={{display: 'flex', justifyContent: 'end'}} />
        </ProductCard>
      </div>
    </div>
  )
}
