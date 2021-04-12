import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../login';
import Seller_signup from '../sellersignup';
import SellerLogin from '../sellerlogin';
import superAdmin from '../dashboard/superadmin/superadmin';
import Addadmin from '../dashboard/superadmin/admin-add-form';
import Sellerconfirmation from '../dashboard/superadmin/sellerconfirmation';
import SellerActivation from '../dashboard/superadmin/sellerActivation';
import Home from '../client/home';
import Product from '../dashboard/Seller/Seller-dashboard';
import AddProduct from '../dashboard/Seller/product-add-form';
import ADDCARD from '../client/addtocard';





function Routes () { 
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/seller/login" exact component={SellerLogin} />
            <Route path="/seller/signup" exact component={Seller_signup} />
            <Route path="/superadmin-dashboard" exact component={superAdmin} />
            <Route path="/addAdmin" exact component={Addadmin} />
            <Route path="/sellerconfirmation" exact component={Sellerconfirmation} />
            <Route path="/sellerActivation" exact component={SellerActivation} />
            <Route path="/seller-dashboard" exact component={Product} />
            <Route path="/addproduct" exact component={AddProduct} />


            <Route path="/" exact component={Home} />
            <Route path="/add-to-card" exact component={ADDCARD} />
        </Switch>
        </BrowserRouter>
    );
 }

 export default Routes;