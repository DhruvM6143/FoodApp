import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { removeFromCart, decrementQty, incrementqty } from '../redux/Slices/CartSlice'

const ItemCard = ({ id, qty, price, img, name }) => {
    const dispatch = useDispatch()


    return (
        <>
            <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
                <MdDelete onClick={() => { dispatch(removeFromCart({ id, img, price, qty, name })), toast.success(`${name} is removed from your cart`) }} className='absolute right-7 cursor-pointer' />
                <img className='w-[50px] h-[50px]' src={img} alt='' />
                <div className='leading-5'>
                    <h2 className='font-bold text-gray-800 mr-1'>{name}</h2>

                    <div className='flex justify-between ' >
                        <span className='text-green-500 font-bold'>₹{price}</span>
                        <div className='flex justify-center items-center gap-2 absolute right-7'>
                            <FaMinus onClick={() => { qty > 1 ? dispatch(decrementQty({ id })) : dispatch(removeFromCart({ id, img, price, qty, name })) }} className='border-none  text-gray-600 hover:bg-green-500 transition-all ease-linear cursor-pointer' />

                            <span>{qty}</span>
                            <FaPlus onClick={() => { dispatch(incrementqty({ id })) }} className='border-none  text-gray-600 hover:bg-green-500 transition-all ease-linear cursor-pointer' />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ItemCard