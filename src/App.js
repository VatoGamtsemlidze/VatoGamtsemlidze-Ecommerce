import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import MainPage from "./pages/MainPage/MainPage";
import {singlePagePath, signInPath, signUpPath, adminPath, mainPage, profilePath, cartPath} from "./routes";
import Admin from "./pages/Admin/Admin";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";

function App() {
    return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path={mainPage} exact component={MainPage}/>
                        <Route path={singlePagePath} component={SingleProduct}/>
                        <Route path={adminPath} component={Admin}/>
                        <Route path={signInPath} component={SignIn}/>
                        <Route path={signUpPath} component={SignUp}/>
                        <Route path={profilePath} component={Profile}/>
                        <Route path={cartPath} component={Cart}/>
                    </Switch>
                </div>
            </BrowserRouter>
  );
}
export default App;