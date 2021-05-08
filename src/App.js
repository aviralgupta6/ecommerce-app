import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInOrUpPage from "./pages/sign-in-or-up/sign-in-or-up.component";
import ContactPage from "./pages/contact/contact.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInOrUpPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
