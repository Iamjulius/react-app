import { Navbar, NavbarBrand } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

//import Menu from './components/MenuComponent';

//<Menu />
//https://www.coursera.org/learn/front-end-react/supplement/996so/exercise-instructions-react-components-part-1
