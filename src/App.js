import React from 'react'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';
import logo from './assets/img/logo.svg'
import { Provider } from 'react-redux';
import { store } from './store/index';


export default function App() {
  return (
    <Provider store={store}>
      <Header className='header__container'/>
    <main>
      <Navigation />
      <Catalog />
      <Footer logo={logo}/>
    </main>
    </Provider>
  );
}

 
