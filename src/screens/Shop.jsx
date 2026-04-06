import React from 'react'
import ProductCard from '../components/ProductCard';
import { products } from '../data/Productdata';

const Shop = () => {
  return (
     <div >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((elem) => {
          return <ProductCard product={elem} key={elem.id} />;
        })}
      </div>
    </div>
  )
}

export default Shop