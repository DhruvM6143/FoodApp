import React, { useEffect, useState } from 'react'
import FoodData from '../data/foodItems'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/Slices/categorySlice'
const CategoryMenu = () => {
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()
    const listUniqueCategories = () => {
        const uniqueCategories = [
            ...new Set(FoodData.map((food) => food.category))
        ];
        setCategories(uniqueCategories)
    }
    useEffect(() => {
        listUniqueCategories()
    }, [])
    const selectedcategory = useSelector(state => state.category.category)
    return (
        <div className='ml-6 '>
            <h3 className='text-xl font-semibold'>Find the best Food</h3>
            <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
                <button onClick={() => { dispatch(setCategory('All')) }} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedcategory === 'All' && "bg-green-500 text-white"}`}>
                    All
                </button>
                {
                    categories.map((category, index) => {
                        return <button onClick={() => dispatch(setCategory(category))} key={index} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedcategory === category && "bg-green-500 text-white"}`}>
                            {category}
                        </button>
                    })
                }

            </div>
        </div>
    )
}

export default CategoryMenu