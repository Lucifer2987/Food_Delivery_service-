import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddRestaurant from "./pages/AddRestaurant";
import UserProfile from "./pages/UserProfile";
import RestaurantHome from "./pages/RestaurantHome";
import RestaurantOrder from "./pages/RestaurantOrder";
import RestaurantReview from "./pages/RestaurantReview";
import RestaurantPhotos from "./pages/RestaurantPhotos";
import RestaurantMenu from "./pages/RestaurantMenu";
import GetTheApp from "./pages/GetTheApp";
import OrderPage from "./pages/OrderPage";
import DinningPage from "./pages/DinningPage";
import NightlifePage from "./pages/NightlifePage";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/restaurant/:id" element={<RestaurantHome />} />
        <Route path="/restaurant/:id/order" element={<RestaurantOrder />} />
        <Route path="/restaurant/:id/reviews" element={<RestaurantReview />} />
        <Route path="/restaurant/:id/photos" element={<RestaurantPhotos />} />
        <Route path="/restaurant/:id/menu" element={<RestaurantMenu />} />
        <Route path="/get-the-app" element={<GetTheApp />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/dinning" element={<DinningPage />} />
        <Route path="/nightlife" element={<NightlifePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;