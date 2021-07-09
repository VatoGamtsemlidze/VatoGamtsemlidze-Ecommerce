import React from 'react';
import TopBar from "../TopBar/TopBar";
import ShopPhoto from "../ShopPhoto/ShopPhoto";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

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
