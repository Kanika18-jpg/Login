import { BrowserRouter,Routes, Route } from "react-router-dom";
import UserLog from './components/UserLog';
import Dashboard from './components/page/Dashboard';

function App() {
  return (
   <>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserLog />} exact/>
                <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
            </Routes>
             </BrowserRouter>
   </>
  );
}

export default App;
