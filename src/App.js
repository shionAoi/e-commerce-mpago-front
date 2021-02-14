import './App.css';
import {Home} from "./pages/Home";
import {Header} from "./shared/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {Details} from "./pages/Details";
import {Success} from "./pages/notifications/Success";
import {Failed} from "./pages/notifications/Failed";
import {Pending} from "./pages/notifications/Pending";

function App() {
    return (
        <div>
            <script src="https://www.mercadopago.com/v2/security.js" view="home"></script>
            <Header/>
            <Router>
                <div>
                    <Switch>
                        <Route path="/details" component={Details}/>
                        <Route path="/success" component={Success}/>
                        <Route path="/failure" component={Failed}/>
                        <Route path="/pending" component={Pending}/>
                        <Route path="/" component={Home}/>

                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
