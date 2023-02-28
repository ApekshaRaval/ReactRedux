import React from 'react'
import "../App.css"

const Home = (props) => {
    console.log("props:",props.data)
    const products = props.data
    return (
        <>
   
            <div>
               <h1>My Cart</h1>
                <div className='cart-wrapper'>
                    <div className='img-wrapper item'>
                        <img src="https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MLPG3HN_A_1.png?v=1632371107" />
                    </div>
                    <div className='text-wrapper item'>
                        <span>I-Phone</span><br/>
                        <span>Price:$1000.00</span>
                    </div>
                    <div className='btn-wrapper item'>
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({price:9000,name:'i-phone 15'})}
                        }>
                        Add To Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler({})}
                        }>
                        Remove From Cart</button>
                    </div>
                </div>
                <ul>
                {products.map(product => (
                    <li>{product.cardData.price}</li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Home
