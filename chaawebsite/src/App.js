import React from 'react';
import loadable from '@loadable/component'
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar2 from "./components/navbar.component";
// import Footer from "./components/footer.component";
// import Homepage from "./components/homepage.component";
// import Members from "./components/members.component";
// import Performances from "./components/performances.component";
// import Join from "./components/join.component";
// import Contact from "./components/contact.component";

const Navbar2 = loadable(() => import('./components/navbar.component'));
const Footer = loadable(() => import('./components/footer.component'));
const Homepage = loadable(() => import('./components/homepage.component'));
const Members = loadable(() => import('./components/members.component'));
const Performances = loadable(() => import('./components/performances.component'));
const Join = loadable(() => import('./components/join.component'));
const Contact = loadable(() => import('./components/contact.component'));



function App() {

  return (
      <Router>
        <div id ="bigCon">
          <Navbar2/>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/performances" component={Performances} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/contactus" component={Contact} />
          <Footer />
        </div>
      </Router>
  );
}

export default App; 
