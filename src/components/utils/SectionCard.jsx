import React from 'react'
import ProductRow from './ProductRow'

const SectionCard = ({ title, icon, products, onSeeAll }) => {
  return (
    <div className='bg-transparent border border-white/70 rounded-3xl p-6'>
    <div className='flex items-center justify-between mb-5'>
      <h2 className='font-bold text-white text-lg flex items-center gap-2'>
        <span>{icon}</span>
        {title}
      </h2>
      <button
        onClick={onSeeAll}
        className='text-[#c8f135] text-sm  cursor-pointer'
      >
        See all →
      </button>
    </div>
    <div className='flex flex-col gap-2'>
      {products.map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </div>
  </div>
  )
}

export default SectionCard