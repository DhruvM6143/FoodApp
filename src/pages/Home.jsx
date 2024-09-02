import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <>
            <ToastContainer position='top-center' autoClose="2000" />
            <Navbar />
            <CategoryMenu />
            <FoodItems />
            <Cart />


        </>
    )
}

export default Home