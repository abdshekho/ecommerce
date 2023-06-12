import HomePage from "./page/Home/HomePage";
import NavBarLogin from "./Component/utility/NavBarLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Component/utility/Footer";
import LoginPage from "./page/Auth/LoginPage";
import RegisterPage from "./page/Auth/RegisterPage";
import AllCategoryPage from "./page/Category/AllCategoryPage";
import AllBrandPage from "./page/Brand/AllBrandPage";
import ProductContainerPage from "./page/product/ProductContainerPage";
import ProductDetailsPage from "./page/product/ProductDetailsPage";
import CartPage from "./page/Cart/CartPage";
import CheckOut from "./page/CheckOut/CheckOut";
function App() {
  return (
    <div className="">
      <div className="pt-[60px] min-h-[90vh]">
        <BrowserRouter >
          <NavBarLogin />
          <Routes >

            <Route index element={ <HomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
            <Route path="/AllCategory" element={ <AllCategoryPage /> } />
            <Route path="/AllBrand" element={ <AllBrandPage /> } />
            <Route path="/AllProudct" element={ <ProductContainerPage /> } />
            <Route path="/products/:id" element={ <ProductDetailsPage /> } />
            <Route path="/Cart" element={ <CartPage /> } />
            <Route path="/order/paymethoud" element={ <CheckOut /> } />

          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
