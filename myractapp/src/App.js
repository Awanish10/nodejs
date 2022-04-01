
import './App.css';
import Main from './components/Main';
import Add from './components/Add';
import Update from './components/Update';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update />} />
 </Routes>
   </>
  );
}

export default App;
