import React, { createContext, useState } from 'react'
import watch1 from '../assets/watch1.jpg'
import watch2 from '../assets/watch2.jpg'
import head1 from '../assets/head1.jpg'
import iphone2 from '../assets/iphone2.jpg'
import monitor from '../assets/monitor.jpg'
import microphone from '../assets/microphone.jpg'
import dslr1 from '../assets/dslr1.jpg'
import tab from '../assets/tab.jpg'


export const ProductsContex = createContext();

const ProductsContexProvider = (props) =>{
    const [products] = useState([
        {id:1, name:'Digital Watch', price: 500, image: watch1, status:'hot'},
        {id:2, name:'Digital Watch', price: 500, image: watch2, status:'hot'},
        {id:3, name:'HeadPhone', price: 600, image: head1, status:'new'},
        {id:4, name:'Iphone', price: 1200, image: iphone2, status:'new'},
        {id:5, name:'Desktop', price: 1500, image: monitor, status:'hot'},
        {id:6, name:'Microphone', price: 300, image: microphone, status:'hot'},
        {id:7, name:'DSLR', price: 500, image: dslr1, status:'hot'},
        {id:8, name:'Ipad', price: 900, image: tab, status:'hot'},

    ])
    return(
        <ProductsContex.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContex.Provider>

    )
}

export default ProductsContexProvider