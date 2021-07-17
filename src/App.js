import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import MainPage from "./Components/MainPage/MainPage";
import {singlePagePath} from "./Components/Routes/Routes";
import Admin from "./Components/Admin/Admin";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path={singlePagePath} component={SingleProduct}/>
                    <Route path="/admin" component={Admin}/>
                </Switch>
            </div>
        </BrowserRouter>
  );
}
export default App;