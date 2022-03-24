import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import MaDemande from "./pages/demande/maDemande";
import MonDevis from "./pages/demande/monDevis";
import Partage from "./pages/demande/partage";
import Login from "./pages/login/login";


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
      </Switch>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
