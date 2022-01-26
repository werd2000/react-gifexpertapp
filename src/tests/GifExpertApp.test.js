const React = require("react")
const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategory={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

        
    })
    
    
})
