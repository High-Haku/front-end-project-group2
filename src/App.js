import "antd/dist/antd.css";
import "./App.css";
import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
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
import { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";

// element={login === true ? <ProfilePage /> : <Navigate to={"/login"} />}
function App() {
  const navigate = useNavigate();
  const { isLogin } = useContext(UserContext);
  console.log(isLogin);
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);

  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={isLogin ? <Navigate to={'/profile'} /> : <LoginPage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={isLogin === true ? <ProfilePage /> : <Navigate to={"/login"} />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/cats/:id" element={isLogin === true ? <SingleCat /> : <Navigate to={"/login"} />} />
        <Route path="/catshop" element={<CatShop />} />
        <Route path="/catshop/:id" element={isLogin === true ? <ProductCatShop /> : <Navigate to={"/login"} />} />
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
