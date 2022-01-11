// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );
    // console.log(loading);
    
    // useEffect( () => {
    //     getGifs( category )
    //         .then( images => setImages( images ))
    // }, [ category ])

    // getGifs();

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{ category }</h3>

            { loading && <p className='animate__animated animate__flash'>Loading</p>}
            
            <div className='card-grid'>
                { 
                    images.map( image => 
                        <GifGridItem 
                            key={ image.id }
                            { ...image } />)
                        // <li key={ image.id }>
                        //     { image.title }
                        // </li> )
                }
            </div>
        </>
    )
}
