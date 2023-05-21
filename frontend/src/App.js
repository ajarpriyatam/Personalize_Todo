import './App.css';
import { useEffect } from "react";
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import { loadUser } from'./actions/userAction.js'
import Home from './component/home/home';
import store from './store.js'
import LoginSignUp from './component/user/signup';
import Account from './component/user/account';
import NotFound from './component/NotFound';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup_signin" element={<LoginSignUp />}/>
      <Route path="/account" element={<Account/>}/>
      <Route path='*'
          element={ window.location.pathname === "/process/payment" ? null : 
            <NotFound/>
          } 
          />
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
