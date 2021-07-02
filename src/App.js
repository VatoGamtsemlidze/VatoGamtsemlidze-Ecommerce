import './App.css';
import TopBar from "./Ecommerce/TopBar/TopBar";
import ShopPhoto from "./Ecommerce/ShopPhoto/ShopPhoto";
import Main from "./Ecommerce/Main/Main";
import SocialAd from './Ecommerce/SocialAd/SocialAd';
import Footer from "./Ecommerce/Footer/Footer";

function App() {
  return (
    <div>
        <TopBar/>
        <ShopPhoto/>
        <div className="main-cont">
            <Main/>
            <SocialAd/>
            <Footer/>
        </div>
    </div>
  );
}
export default App;