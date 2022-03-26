
import './App.css';
import { BrowserRouter,
    Routes,
    Route,Link} from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Link to="/">Home</Link>
            <Link to="/otherpage">Otherpage</Link>
          </header>
          <div>
           <Routes>
               <Route exact path='/' element={<Fib />} />
               <Route exact path='/otherpage' element={<OtherPage />} />
           </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
