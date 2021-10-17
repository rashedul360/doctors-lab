import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./Components/configuration/context/AuthProvider";
import Login from "./Components/LoginAndRegistration/login/Login";
import Registration from "./Components/LoginAndRegistration/Registration/Registration";
import Reset from "../src/Components/Pages/Reset/Reset";
import UserInfo from "./Components/Pages/userInfo/userInfo";
import PrivetRoute from "./Components/Pages/PrivetRoute/PrivetRoute";
import Header from "./Components/shared/Header/Header";
import Footer from "./Components/shared/Footer/Footer";
import Services from "./Components/Pages/Home/Doctors/Doctors";
import HomePage from "./Components/Pages/Home/HomePage/HomePage";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Doctors from "./Components/Pages/Home/Doctors/Doctors";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route exact path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/reset">
              <Reset></Reset>
            </Route>
            <PrivetRoute path="/userinfo">
              <UserInfo></UserInfo>
            </PrivetRoute>
            <PrivetRoute path="/services">
              <Doctors></Doctors>
            </PrivetRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
