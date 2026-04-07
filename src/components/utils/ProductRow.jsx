import React, { useContext } from 'react'
import { cartStore } from '../../context/CardContext';
import { BsCart2 } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const ProductRow = ({product}) => {
   const { addToCart, isItemInCart } = useContext(cartStore);
  const inCart = isItemInCart(product.id);
  let navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/shop/product/${product.id}`)} className='flex items-center cursor-pointer justify-between p-3 border border-white/25 rounded-2xl'>
      <div className='flex items-center gap-3'>
        <img
          src={product.image}
          alt={product.title}
          className='w-12 h-12 object-cover rounded-xl'
        />
        <div className='flex flex-col gap-1'>
        <span className='text-sm font-semibold'>{product.title}</span>
        <span className='text-sm font-semibold text-white/50'>${product.price}</span>
        </div>
      </div>
      <button
        onClick={() => addToCart(product)}
        className={`p-2 rounded-xl border transition-colors cursor-pointer
          ${inCart
            ? 'bg-[#c8f135]/20 border-[#c8f135]/40 text-[#c8f135]'
            : 'bg-[#c8f135]/10 border-[#c8f135]/20 text-[#c8f135] hover:bg-[#c8f135]/20'
          }`}
      >
        <BsCart2 size={16} />
      </button>
    </div>
  );
}

export default ProductRow