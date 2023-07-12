import HomePage from "./page/Home/HomePage";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarLogin from "./Component/utility/NavBarLogin";
import Footer from "./Component/utility/Footer";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ProductContainerPage from "./page/product/ProductContainerPage";
import ProductDetailsPage from "./page/product/ProductDetailsPage";
import CartPage from "./page/Cart/CartPage";
import CheckOut from "./page/CheckOut/CheckOut";
import AdminAllOrderPage from "./page/Admin/AdminAllOrderPage";
import AdminOrderDetailsPage from "./page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./page/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./page/Admin/AdminAddProductPage";
import UserAllOrderPage from "./page/user/UserAllOrderPage";
import UserFavoriteProductsPage from "./page/user/UserFavoriteProductsPage";
import UserAllAddressPage from "./page/user/UserAllAddressPage";
import UserAddNewAddressPage from "./page/user/UserAddNewAddressPage";
import UserEditAddressPage from "./page/user/UserEditAddressPage";
import UserProfilePage from "./page/user/UserProfilePage";
import AdminAllProduct from "./Component/Admin/AdminAllProduct";
import AdminMangeProducts from "./page/Admin/AdminMangeProducts";
import AdminEditProductsPage from "./page/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./page/Auth/ForgetPasswordPage";
import ScrolTopWrapper from "./Component/utility/ScrolTopWrapper";
import AdminAddCouponPage from "./page/Admin/AdminAddCouponPage";
import ProtectedRouteHook from "./hook/auth/protected-route-hook";
import ProtectedRoute from "./Component/utility/ProtectedRoute";
import VerifyPasswordPage from "./page/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./page/Auth/ResetPasswordPage";
import ProductByCategory from "./page/product/ProductByCategory";
import ProudctByBrand from "./page/product/ProudctByBrand";
import AdmiFavoritPage from "./page/Admin/AdmiFavoritPage";
// import baseUrl from "./Api/baseURL";
function App() {


  const [ isUser, isAdmin, userData ] = ProtectedRouteHook()
  return (
    <div className="">
      <div className="pt-[126px] md:pt-[70px] min-h-[80vh]">
        <BrowserRouter >
          <NavBarLogin />
          <ScrolTopWrapper >
            <Routes >

              <Route index element={ <HomePage /> } />
              <Route path="/login" element={ <LoginPage /> } />
              <Route path="/register" element={ <RegisterPage /> } />
              <Route path="/AllCategory" element={ <AllCategoryPage /> } />
              <Route path="/AllBrand" element={ <AllBrandPage /> } />
              <Route path="/AllProudct" element={ <ProductContainerPage /> } />
              <Route path="/products/:id" element={ <ProductDetailsPage /> } />
              <Route path="/Cart" element={ <CartPage /> } />
              <Route path="/user/forget-password" element={ <ForgetPasswordPage /> } />
              <Route path="/user/verify-code" element={ <VerifyPasswordPage /> } />
              <Route path="/user/reset-password" element={ <ResetPasswordPage /> } />
              <Route path="/products/category/:title/:id" element={ <ProductByCategory /> } />
              <Route path="/products/brnad/:name/:id" element={ <ProudctByBrand /> } />


              <Route element={ <ProtectedRoute auth={ isAdmin } /> }>
                <Route path="/admin/allorders" element={ <AdminAllOrderPage /> } />
                {/* <Route path="/admin/order/id" element={ <AdminOrderDetailsPage /> } /> */ }
                <Route path="/admin/order/:id" element={ <AdminOrderDetailsPage /> } />
                <Route path="/admin/addbrand" element={ <AdminAddBrandPage /> } />
                <Route path="/admin/addCategory" element={ <AdminAddCategoryPage /> } />
                <Route path="/admin/addSubCategory" element={ <AdminAddSubCategoryPage /> } />
                <Route path="/admin/allproducts" element={ <AdminMangeProducts /> } />
                <Route path="/admin/addproduct" element={ <AdminAddProductPage /> } />
                <Route path="/admin/addcoupon" element={ <AdminAddCouponPage /> } />
                <Route path="/admin/editproducts/:id" element={ <AdminEditProductsPage /> } />
                <Route path="/admin/favorite" element={ <AdmiFavoritPage /> } />
              </Route>

              <Route element={ <ProtectedRoute auth={ isUser } /> }>
                <Route path="/user/allorders" element={ <UserAllOrderPage /> } />
                <Route path="/user/favorite" element={ <UserFavoriteProductsPage /> } />
                <Route path="/user/address" element={ <UserAllAddressPage /> } />
                <Route path="/user/AddNewAddress" element={ <UserAddNewAddressPage /> } />
                <Route path="/user/edite-address" element={ <UserEditAddressPage /> } />
                <Route path="/user/user-profile" element={ <UserProfilePage /> } />
                <Route path="/order/paymethoud" element={ <CheckOut /> } />
              </Route>


            </Routes>
          </ScrolTopWrapper>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
