import react from 'react';
import { shallow }  from 'enzyme';

import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    // Inicializa los controles antes de cada prueba
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    });
    
    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    })

    test('Debe cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change', { target: {value} });
        expect(wrapper.find('input').prop('value')).toBe(value);
        
    })


    test('No debe postear la información con submit', () => {
        // Aquí simulo el submit
        wrapper.find('form').simulate('submit', { preventDefault(){}});

        expect( setCategories ).not.toHaveBeenCalled()
        
    })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'hola mundo';
        wrapper.find('input').simulate('change', { target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect( setCategories ).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
    

})
