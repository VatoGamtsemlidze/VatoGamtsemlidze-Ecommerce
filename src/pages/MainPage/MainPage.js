import React from 'react';
import TopBar from "../../layouts/TopBar/TopBar";
import ShopPhoto from "../../Components/ShopPhoto/ShopPhoto";
import Main from "../../layouts/Main/Main";
import Footer from "../../layouts/Footer/Footer";

const MainPage = () => {


    return (
        <div>
            <TopBar/>
            <ShopPhoto/>
            <div className="main-cont">
                <Main/>
                <Footer/>
            </div>
        </div>
    );
};

export default MainPage;
