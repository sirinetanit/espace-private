import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import MaDemande from "./pages/demande/maDemande";
import MonDevis from "./pages/demande/monDevis";
import Partage from "./pages/demande/partage";
import Login from "./pages/login/login";
import Signup from "./pages/login/signup";
import LinkLogin from "./pages/login/linkMSG";
import Welcome from "./pages/login/welcome";
import MonVoyage from "./pages/demande/monVoyage/monVoyage";
import MonVoyage2 from "./pages/demande/monVoyage/monVoyage2";
import MonVoyage3 from "./pages/demande/monVoyage/monVoyage3";



function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>


      <Route path='/' exact><Home/></Route>
      <Route path='/ma-demande' exact><MaDemande/></Route>
      <Route path='/mon-devis'><MonDevis/></Route>
      <Route path='/partage'><Partage/></Route>
      <Route path='/login'><Login/></Route>
      <Route path='/signUp'><Signup/></Route>
      <Route path='/link'><LinkLogin/></Route>
      <Route path='/welcome'><Welcome/></Route>
      <Route path='/mon-voyage'><MonVoyage/></Route>
      <Route path='/mon-voyage-02'><MonVoyage2/></Route>
      <Route path='/mon-voyage-03'><MonVoyage3/></Route>



      </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
