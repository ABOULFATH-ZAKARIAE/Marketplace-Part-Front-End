import React,{useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';







const Sellerconfirmation = () => {
const [superAdmin, setSuperAdmin] = useState();
const [vendeur, setVendeur] = useState();
const history = useHistory();

useEffect(()=>{


  axios.get(`http://localhost:5000/seller`)
    .then(function (response) {

      setVendeur(response.data)

    }).catch(function (err) {
      console.log(err);
  });

  })

  useEffect(()=>{
    axios.get(`http://localhost:5000/getsuperadmin`)
    .then(function (response) {

        setSuperAdmin(response.data)

    }).catch(function (err) {
      console.log(err);
    
  });
})

const getIdSeller = (id)=>{
  localStorage.setItem('idSeller',id);
  history.push('/sellerActivation');

}
    // const history = useHistory();
    return(
<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
  <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
    <div className="flex items-center pl-6 h-20 border-b border-gray-800">
    { superAdmin && superAdmin.map(item =>(
      <div className="ml-1">
        <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">{item.firstName + " " + item.lastName}</p>
        <div className="badge">
          <span className="px-2 py-1 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">{item.role}</span>  
        </div>  
      </div>
         ))} 
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-6 space-y-1">
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard</div>
          </div>
        </li>
        <li>
          <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </span>
            <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Home</span>
          </a>
        </li>
        <li>
        <Link to="/addadmin">
          <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
            </span>
            <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Admins Field</span>
          </a>
          </Link>
        </li>
        <li>
          <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
            <span className="inline-flex justify-center items-center ml-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </span>
            <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Sellers Field</span>
          </a>
        </li>
        <li>
          <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
            <span className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="overflow-x-auto">
  <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
    <div className="w-full lg:w-5/6 ml-60">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Vendeur</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-center">Phone Number</th>
              <th className="py-3 px-6 text-center">status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          { vendeur && vendeur.map(item =>(   
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <span>{item.firstName + " " + item.lastName}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex items-center">
                  <span>{item.email}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="bg-white-200 text-black-600 py-1 px-3 rounded-full text-xs">{item.phone}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="bg-white-200 text-black-600 py-1 px-3 rounded-full text-xs">{item.status}</span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div className="w-4 mr-2 transform hover:text-green-500 hover:scale-110">
                    <Link onClick={()=>getIdSeller(item._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"/>
                    </svg>
                    </Link>
                  </div>
                  <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
           ))}
        </table>
      </div>
    </div>
  </div>
</div>

</div>



    )
}

export default Sellerconfirmation;