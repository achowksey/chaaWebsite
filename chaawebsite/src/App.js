import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar2 from "./components/navbar.component";
import Homepage from "./components/homepage.component";
import Members from "./components/members.component";
import Performances from "./components/performances.component";
import Join from "./components/join.component";
import Contact from "./components/contact.component";
import Footer from "./components/footer.component";



function App() {

  return (
    <Router>
        <Navbar2/>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/performances" component={Performances} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/contactus" component={Contact} />
        <Footer />
    </Router>
  );
}

export default App; 
