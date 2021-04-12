import React,{useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../navbar';



const ADDCARD = () => {
    const [products, setProducts] = useState();
    
    const idPdt = localStorage.getItem("idProduct");
    
    useEffect(()=>{

        axios.get(`https://marketplacebreif.herokuapp.com/seller/product/getProductById/${idPdt}`)
          .then(function (response) {
      
            setProducts(response.data)
      
          }).catch(function (err) {
            console.log(err);
        });
      
        })



    return(
<div>
<Navbar/>
<div className="shadow-lg rounded-2xl  bg-white w-64 mt-8 ml-10 p-2">
  <img src={products && products.image} alt="adidas" className="w-32 p-4 h-36 m-auto" />
  <div className="bg-blue-200 m-3 p-4 rounded-lg">
    <p className="text-white text-xl font-bold ">
    {products && products.title}
    </p>
    <p className="text-gray-50 text-xs">
      {}
    </p>
    <div className="flex items-center justify-between "> 
      <p className="text-white">
      </p>
      <button type="submit" className="w-10 h-10 text-base font-medium rounded-full text-white bg-green-500 hover:bg-pink-700">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className="mx-auto" fill="white" viewBox="0 0 1792 1792">
          <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
          </path>
        </svg>
      </button>
    </div>
  </div>
</div>
</div>

    )
}

export default ADDCARD;