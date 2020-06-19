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

//Route Properties and URL Parameters
/*
You can access them through props, just like any other React property:

const About = (props) => {
  console.log(props.match)
  // Object {path: "/about", url: "/about", isExact: true, params: Object}
  console.log(props.location)
  // Object {pathname: "/about", search: "", hash: "", state: undefined}
  console.log(props.history)
  // Object {length: 1, action: "POP", location: Object}
  return (
    <div>
      About
    </div>
)}

const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/about" component = {About}/>
    </BrowserRouter>
  </div>
);


You can also access them through ES6 destructuring:

const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/about" render={ ({match,location,history}) => { 
        console.log(match)
        // Object {path: "/about", url: "/about", isExact: true, params: Object}
        console.log(location)
        // Object {pathname: "/about", search: "", hash: "", state: undefined}
        console.log(history)
        // Object {length: 1, action: "POP", location: Object}
        return (
          <div>About</div>
        )}
      }/>
    </BrowserRouter>
  </div>
);

You can access the URL param value by using the match.params object that is passed down to the rendered component:

const User = ({match}) => {
 return (
   <div>
     UserId: {match.params.id} //this will show the id entered in the URL path
   </div>
)}

const App = () => (
 <div>
   <BrowserRouter>
     <Route path="/userId/:id" component = {User}/>
   </BrowserRouter>
 </div>
);


if you want to add additional Route components within a component rendered from an original Route component do the following:

const Info = ({match}) => {
  return (
    <div>
      <Route path="{match.url + "/phone"}" render={(props) => <div>Phone: 123 456 7890</div>}/> // renders when URL = /info/phone
      <Route path="{match.url + "/email"}" render={(props) => <div>Email: email@email.com</div>}/> renders when URL = /info/email
      <Route path="{match.url + "/address"}" render={(props) => <div>Address: 123 Address</div>}/> renders when URL = /info/address
    </div>
)}

const App = () => (
  <div>
    <BrowserRouter>
      <Route path="/info" component = {Info}/>
    </BrowserRouter>
  </div>
);

*/

/*
Link
The Link component is used to provide a clickable link that will change the URL of the page.

We can import the Link component with:
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.params.id}</div>;

const Info = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/phone"}>Phone</Link>
        </li>
        <li>
          <Link to={match.url + "/email"}>Email</Link>
        </li>
        <li>
          <Link to={match.url + "/address"}>Address</Link>
        </li>
      </ul>
      <hr />
      <Route
        path={match.url + "/phone"}
        render={props => <div>Phone: 123 456 7890</div>}
      />
      <Route
        path={match.url + "/email"}
        render={props => <div>Email: email@email.com</div>}
      />
      <Route
        path={match.url + "/address"}
        render={props => <div>Address: 123 Address</div>}
      />
    </div>
  );
};

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
          <Link to="/users/abc">Users: abc</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="/info" component={Info} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));






*/

/*
NavLinks

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.params.id}</div>;

var style = {
  color: "red"
};

const activeEvent = (match, location) => {
  if (!match) {
    return false;
  }
  //do something
  console.log("active on : " + match.url);
};

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink exact activeStyle={style} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/users/abc">
            Users: abc
          </NavLink>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
    </div>
  </BrowserRouter


*/

// switch
/*


import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const AllUsers = () => {
  return (
    <div>
      Show All Users:
      <ul>
        <li>abc</li>
        <li>def</li>
        <li>ghi</li>
      </ul>
    </div>
  );
};
const Users = ({ match }) => <div>{match.params.id}</div>;
const DefaultRoute = () => <div>Default Route</div>;

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
          <Link to="/users/abc">Users: abc</Link>
        </li>
        <li>
          <Link to="/users/allUsers">Show All Users</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/allUsers" component={AllUsers} />
        <Route path="/users/:id" component={Users} />
        <Route component={DefaultRoute} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));


*/

//Redirects
/*
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Error = () => <div>Error: Invalid User</div>;

const Users = ({ match }) => {
  var validUsers = ["abc", "def"];
  if (!validUsers.includes(match.params.id)) return <Redirect to="/error" />;
  else return <div>Welcome: {match.params.id}</div>;
};
const DefaultRoute = () => <div>Default Route</div>;

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
          <Link to="/users/abc">Users: abc</Link>
        </li>
        <li>
          <Link to="/users/invalid user">Users: invalid user</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/:id" component={Users} />
        <Route path="/error" component={Error} />
        <Route component={DefaultRoute} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));

*/
