import './App.css';
import React from "react";
import { Provider } from 'react-redux';
import store from './redux/store'
import OilPriceContainer from './components/OilPriceContainer';
// import OilPrice from "./OilPrice";

function App () {
    return (
      <Provider store={store}>
        <div className='App'>
        <React.Fragment>
          <OilPriceContainer/>
        </React.Fragment>
        </div>
      </Provider>
    )
  }

export default App;
