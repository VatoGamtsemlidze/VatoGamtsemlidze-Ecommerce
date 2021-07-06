import './App.css';
import TopBar from "./Components/TopBar/TopBar";
import ShopPhoto from "./Components/ShopPhoto/ShopPhoto";
import Main from "./Components/Main/Main";
import SocialAd from './Components/SocialAd/SocialAd';
import Footer from "./Components/Footer/Footer";

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