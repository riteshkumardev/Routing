
import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import About from './component/About';
import Counter1 from './component/Conter1';
import Form from './component/Form';
import Home from './component/Home';
import Navbar from './component/Navbar';
// import Profile from './component/Profile'; 
import ApiGet from './component/ApiGet';
// import Navbar from "./component/Navbar";
import CardForm from "./component/CardForm"
import TodoList from './component/TodoList';
// import NavbarTest from './component/NavbarTest';
// import Navbar2 from './component/Navbar2';


function App() {

  // const [localStorageData, setLocalStorage] = useState([]);


  return (
    <div className="App">


      <Navbar />

      <div>

        <Routes>

          {/* /////////////////////////////////////////////////////////////// */}
          <Route path="/Home" element={<Home />} />
          <Route path="/TodoList" element={<TodoList />} />
          <Route path="/CardForm" element={<CardForm />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Counter" element={<Counter1 />} />
          <Route path="/ApiGet" element={<ApiGet />} />

          {/* <Route path="/Navbar2" element={<Navbar2 />} /> */}
          {/* <Route path="/ShopingCart" element={<Navbar2 cart={cart} />} /> */}
          {/* /////////////////////////////////////////////////////////////// */}

        </Routes>
      </div>
    </div>

  );
}

export default App;
