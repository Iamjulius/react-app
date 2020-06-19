import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import About from "./About.jsx";
import Resume from "./Resume.jsx";
import Error from "./Error.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

/*
Go to https://codesandbox.io/s/new to create a new React project.
Fork the project so that you can save it to your account.
Give the project a title such as “Personal Website using React Router”
Add react-router-dom as a dependency.
Create a new folder inside the src folder. Name it components.
Create a new file inside the components folder. Name it App.jsx
Copy the following inside App.jsx:



import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App.jsx";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



*/
