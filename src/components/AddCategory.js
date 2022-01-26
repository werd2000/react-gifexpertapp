import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    // Desestructuro el useState
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        // console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit llamado', inputValue);
        if (inputValue.trim().length > 2) {
            setCategories( cate => [inputValue, ...cate ]);
            // mando un string vacio para limppiar el input
            setInputValue('');
        }
        // console.log(e.target.value);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};