import React from "react";

import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'Goku';

    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category= { category } />);
        expect( wrapper).toMatchSnapshot();
        
    });

    test('debe mostrar items cuando se cargan imágenes useFecthGifs', () => {
        const gifs = [{
            id: 'abc',
            url: 'https://google.com',
            title: 'Titulo'
        },
        {
            id: 'bcd',
            url: 'https://localhost/ima.jpg',
            title: 'Titulo2'

        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        const wrapper = shallow(<GifGrid category= { category } />);
        // expect(wrapper).toMatchSnapshot();
        // expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
      
})
