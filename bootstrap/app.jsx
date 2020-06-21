import { Navbar, NavbarBrand } from "reactstrap";
import { DISHES } from "./shared/dishes";

class App extends Component {
  import { DISHES } from './shared/dishes';
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

//import Menu from './components/MenuComponent';
//https://reactstrap.github.io/components/form/
//<Menu />
//https://www.coursera.org/learn/front-end-react/supplement/996so/exercise-instructions-react-components-part-1
