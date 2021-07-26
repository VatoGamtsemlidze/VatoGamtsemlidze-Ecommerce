import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import MainPage from "./pages/MainPage/MainPage";
import {singlePagePath, signInPath, signUpPath, adminPath, mainPage} from "./routes";
import Admin from "./pages/Admin/Admin";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

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
                    </Switch>
                </div>
            </BrowserRouter>
  );
}
export default App;