import React from 'react'
import { addToCart } from '../redux/Slices/CartSlice'
import { useDispatch } from 'react-redux'
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
const NewCard = ({ id, desc, name, img, rating, price }) => {
    const dispatch = useDispatch()
    return (
        <div class='flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
            <div class='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
                <div class='max-w-md mx-auto'>
                    <div class='h-[236px]' >
                        <img className='w-auto h-auto hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' src={img} alt="" />
                    </div>
                    <div class='p-4 sm:p-6'>
                        <p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{name}</p>
                        <div class='flex flex-row'>
                            <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>{price}</p>
                            <p class='text-[17px] font-bold text-[#0FB478]'>{price}</p>
                        </div>
                        <p class='text-[#7C7C80] font-[15px] mt-6'>{desc.slice(0, 50)}</p>


                        <a target='_blank' href='foodiesapp://food/1001' onClick={() => { dispatch(addToCart({ id, name, price, img, rating, qty: 1 })) }} class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                            Add to Cart
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCard