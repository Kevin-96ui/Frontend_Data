import "./App.css";

import { registerLicense } from "@syncfusion/ej2-base";
import Dashboard from "./Dashboard";
import Log from "./Log";
import{BrowswerRouter, Router, Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Home";

registerLicense(
  // "ORg4AjUWIQA/Gnt2UFhhQlJBfVldX3xLflFyVWJTfFh6dlRWESFaRnZdRl1mSX1Td0ZkWXtfcX1U"
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cWWFCeEx0WmFZfVpgdV9FZlZTRWYuP1ZhSXxXdkBjX39dc3VURmhZUEA="
);

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Log/>}/>
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Home' element={<Home/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    // User - https://backend-data-zyf0.onrender.com/user
    // Admin - https://backend-data-zyf0.onrender.com/admin
  );
}

export default App;
