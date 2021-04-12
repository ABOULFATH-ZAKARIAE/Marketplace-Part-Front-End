 import  React, { useState }  from 'react';
 import axios from 'axios';
 import {useHistory } from "react-router-dom";
 import toastr from 'toastr';
import "toastr/build/toastr.css";


const SellerLogin = () => {
	const history = useHistory();
	const [login, setlogin] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const vendeur = {login,password}

    axios.post(`https://marketplacebreif.herokuapp.com/seller/login`, vendeur)
		.then(res => {
			console.log(res)
			if(!res.data.message){
        
        let status= res.data.status;

       localStorage.setItem("status", status);
        if(status === "Inactive"){
          toastr.error('This Account is not activated! Yet please contact us if you have any problem')
        }else if (status === "Block"){
        toastr.error('This Account is Blocked! please contact us if you have any problem')
      }else{
			 let token= res.data.token;
       localStorage.setItem("getlogin", login);
			 localStorage.setItem("token", token);
			 history.push('/seller-dashboard');
			 toastr.info('vendeur is authenticated SuccessFully', `Welcome ${vendeur.login}`, {
				positionClass: "toast-top-left",
			})
    }

			}else{
				toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !', {
                    positionClass: "toast-top-left",
                })
			}
		 
		})
	}
return(

	<div className="bg-blue-400 h-screen w-screen">
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: '500px'}}>
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Sign-In</h1>
                <div className="w-full mt-4">
                  <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-4">
                      <input id="login" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="login"  placeholder="Login" required 
			  			onChange={e => setlogin(e.target.value)} />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input id="password" type="password" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password"
						value={password} onChange={e => setPassword(e.target.value)}  />
                    </div>
                    <div className="flex items-center mt-4">
                      <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                    </div>
                    <div className="flex flex-col mt-8">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-4">
                    <a className="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{background: 'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")', backgroundSize: 'cover', backgroundPosition: 'center center'}} />
          </div>
        </div>
      </div>
)

}
 export default  SellerLogin;
