import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
const App = () =>{
return(
    <div className="ui container" style={{marginTop:'10px'}}>
        <Navbar />
        <Sidebar />
    </div>
);
}
export default App;