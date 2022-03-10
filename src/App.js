import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import NavbarPage from "./components/navbar";
import Footer from "./components/footer";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CatList from "./components/CatList";
import SingleCat from "./components/SingleCat";
import CatShop from "./pages/CatShop";
import ProductCatShop from "./components/productCatShop";
import CartCatShop from "./components/cartCatShop";
import CheckoutCatShop from "./components/checkoutCatShop";

// element={login === true ? <ProfilePage /> : <Navigate to={"/login"} />}
function App() {
  const login = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/cats/:id" element={<SingleCat />} />
        <Route path="/catshop" element={<CatShop />} />
        <Route path="/catshop/:id" element={<ProductCatShop />} />
        <Route path="/cart" element={<CartCatShop />} />
        <Route path="/checkout" element={<CheckoutCatShop />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const Template = () => {
  return (
    <div>
      <NavbarPage />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
