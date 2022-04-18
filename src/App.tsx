import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Bar from "./layout/bar";

import Album from "./tryPages/reactSample";
import Box from "@material-ui/core/Box";
import { Container, Toolbar } from "@material-ui/core";
import Card from "./layout/mycard";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <>
    
        <Router>
       <Bar />  
       <Toolbar /> 
      <Box>
      

        
        <Routes>
          <Route  path="/" element={<Home />} />
           
          <Route path="/about" element={<About />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/album" element={<Album />} />
           
        </Routes>
      </Box>
    </Router>

    </>

  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Container maxWidth='xs'>

      <Card />
      </Container>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}







// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
