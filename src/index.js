import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.url}</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  </BrowserRouter>
);
render(<App />, document.getElementById("root"));

//BrowserRouter
//import { BrowserRouter} from "react-router-dom"

/*
const BasicExample = () => (
  <BrowserRouter>
    <div> //A Router can only have one child element, so make sure everything goes in the div
      //other React Router components go here
    </div>
  </BrowserRouter>
)
*/

/*
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/home" component={Home} />
      <Route path="/about" render={() => <div>About</div>} />
      <Route children={() => <div>Always Rendered</div>} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
*/

/*
<Route exact path="/" render={(props) => <div>Home</div>}/> // "only a URL path of "/" will match
<Route strict path="/about" render={(props) => <div>About</div>}/> // A URL path of "/about" matches but "/about/" doesn't match
const App = () => (
  <div>
    <BrowserRouter> 
      <div>
        <Route path="/" render={(props) => <div>Home</div>}/> //A URL path of "/about/123" matches because "/about/123" contains "/" 
        <Route path="/about" render={(props) => <div>About</div>}/> //A URL path of "/about/123" matches because "/about/123" contains "/about
      </div>
    </BrowserRouter>
  </div>
);
*/
