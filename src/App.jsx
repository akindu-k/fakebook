import { useEffect } from "react";
import Home from "./pages/Home/Home";
function App() {

  useEffect( () => {
    const fetchData = async () =>{
    const res = await fetch('http://localhost:3000');
    const data = await res.json();
    console.log(data);
  }
  fetchData(); // Call the fetchData function
},[])
  
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
