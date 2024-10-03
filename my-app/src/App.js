import Rotas from "./routes/Rotas";
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    
    
    <div className="App">
      
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Rotas />
    </BrowserRouter>
   
    </div>
    
  );
}

export default App;
