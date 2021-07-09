import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import MainPage from "./Components/MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={MainPage}/>
                    <Route path="/product" component={SingleProduct}/>
                </Switch>
            </div>
        </BrowserRouter>
  );
}
export default App;