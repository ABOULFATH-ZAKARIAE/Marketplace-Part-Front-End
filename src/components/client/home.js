import  React, { useState, useEffect }  from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import {useHistory } from "react-router-dom";
// import toastr from 'toastr';
import "toastr/build/toastr.css";
import Navbar from '../navbar';




const Home = ()  => {

  const history = useHistory();
    const [products, setProducts] = useState();



    useEffect(()=>{

        axios.get(`http://localhost:5000/seller/product/productget`)
          .then(function (response) {
      
            setProducts(response.data)
      
          }).catch(function (err) {
            console.log(err);
        });
      
        })

 const getIdProduct = (id)=>{
          localStorage.setItem('idProduct',id);
          history.push('/add-to-card');
      
        }
return(
    <div>
    <Navbar />
    <div className="grid 2xl:grid-cols-4 xm:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12  mt-4 m-auto">
    { products && products.map(item =>(
    <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
  <div className="prod-title">
    <p className="text-2xl uppercase text-gray-900 font-bold">{item.title}</p>
    <p className="uppercase text-sm text-gray-400">
      {item.description}
    </p>
  </div>
  <div className="prod-img">
    <img src={item.image} className="w-full object-cover object-center" />
  </div>
  <div className="prod-info grid gap-10">
    <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
      <p className="font-bold text-xl">{item.price}$</p>
      <button onClick={()=>getIdProduct(item._id)} type="submit" className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
        to cart</button>
    </div>
  </div>
  </div>
      ))}
      </div>
</div>

)
}


export default Home;


