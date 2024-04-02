import logo from './logo.svg';
import './App.css';



import { Form, Route, Routes } from 'react-router-dom';
import Subform from './componenet/Subform'




function App() {
 
   
  return (
    <>
    

       
      <Routes>
      <Route path='/' element={<Subform/>}></Route>
      


    
    </Routes>
  
  
    
    {/* <Counter/> */}
    </>
  );
}

export default App;
