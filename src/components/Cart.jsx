import React, { useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux'
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const [activeCart, setActiveCart] = useState(false);

    const cartItems = useSelector((state) => state.cart.cart)

    const total = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)



    return (
        <>
            <div className={` fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-4 ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50`} >
                <div className='flex justify-between items-center my-3'>
                    <span className='text-xl font-bold text-green-600'>My Order</span>
                    <IoCloseCircleSharp onClick={() => setActiveCart(!activeCart)} className='text-xl  text-gray-600 font-bold lg:text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer' />
                </div>

                {
                    cartItems.length > 0 ? cartItems.map((food) => {
                        return <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} qty={food.qty} img={food.img} />
                    })
                        :
                        <h2 className='text-center text-xl font-bold text-gray-800'>Your cart is empty</h2>
                }



                <div className='absolute bottom-0 '>
                    <h3 className='font-semibold text-gray-800'>Items : {total}</h3>
                    <h3 className='font-semibold text-green-600'>Total Amount : ₹{totalPrice} </h3>
                    <hr className='w-[90vw] lg:w-[18vw]' />
                    <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5' onClick={() => navigate('/success')}>CheckOut</button>
                </div>
            </div>
            <FaCartArrowDown onClick={() => setActiveCart(!activeCart)} className={`cursor-pointer rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-8 right-4 ${total > 0 && "animate-bounce delay-500 transition-all "}`} />

        </>
    )
}

export default Cart