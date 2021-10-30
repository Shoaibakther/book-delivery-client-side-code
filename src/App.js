import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';


import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import AddService from './Components/AddServices/AddServices';

import ManageServices from './Components/ManageServices/ManageServices';
import MyOrder from './Components/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
            </Route>
            
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
          <PrivateRoute path="/myOrder/:serviceId">
            <MyOrder></MyOrder>
          </PrivateRoute>
          
            <Route path='/addService'>
              <AddService></AddService>
            </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/footer">
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
