import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } />)

    test('Debe mostar <GifGridItem/> correctamente', () => {
        expect (wrapper).toMatchSnapshot();
    })
    
    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );
    })

    test('Debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
    })
    
    test('Debe tener la clase animated__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        // console.log(div.prop('className').includes('animate__fadeIn'));
        expect( className.includes('animate__fadeIn') ).toBe(true);
        // .find('animated__fadeIn')).toBe('animated_fadeIn')
    })
    
    
})
