import React from 'react';
import {User} from './components/User'
import Navbar from './components/Navbar'
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

    return(
      <div>
      <Navbar></Navbar>
    </div>
  );
  
}

export default App;
