import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategory = []}) => {

    // Desestructuro el useState
    const [categories, setCategories] = useState(defaultCategory);
    
    // const handleAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories( cate => [...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            <ol>
                { 
                    categories.map( category => 
                        <GifGrid
                            key={ category }
                            category={ category }
                        /> )
                }
            </ol>
            <p><img src='../public/Poweredby_100px-White_VertLogo.png' alt='Powered by GIPHY'/></p>
        </>
    )
}