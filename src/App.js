import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Project/Home';
import { Durga } from './Project/project';
import { Table } from './Project/table';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' exact element={<HomePage/>}/>
      <Route path='/form' exact element={<Durga/>}/>
      <Route path='/data' exact element={<Table/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
