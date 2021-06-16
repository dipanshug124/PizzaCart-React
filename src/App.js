import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navigation from './Components/Navigation'
import Products from './Pages/Products';
import Cart from './Pages/Cart';
const App = () => {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;