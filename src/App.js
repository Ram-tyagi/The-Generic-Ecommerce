import { useContext } from "react";
import About from "./components/About";
import AuthForm from "./components/AuthForm";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";
import NotFound from "./components/NotFound";
import Productdetail from "./components/Productdetail";
import Showproducts from "./components/Showproducts";
import { Route, Switch } from "react-router-dom";
import CreateContext from "./store/create-context";
import Footer from "./components/Footer";
function App() {
  const createcontext = useContext(CreateContext);
  const expiredTime = createcontext.isLoggedIn;
  console.log(createcontext.item);
  return (
    <>
      <MyNavbar />
      <Switch>
        <Route path="/" exact>
          {expiredTime ? <Home /> : <AuthForm />}
        </Route>
        <Route path="/store" exact>
          {expiredTime ? <Showproducts /> : <AuthForm />}
        </Route>
        <Route path="/store/:storeid" exact>
          {expiredTime ? <Productdetail /> : <AuthForm />}
        </Route>
        <Route path="/about" exact>
          {expiredTime ? <About /> : <AuthForm />}
        </Route>
        <Route path="/contact" exact>
          {expiredTime ? <Contact /> : <AuthForm />}
        </Route>
        {!expiredTime && (
          <Route path="/auth" exact>
            <AuthForm />
          </Route>
        )}

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
