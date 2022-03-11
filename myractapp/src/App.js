
import './App.css';
import Main from './components/Main';
import Add from './components/Add';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
 </Routes>
   </>
  );
}

export default App;
