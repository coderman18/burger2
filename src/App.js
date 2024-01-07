import React from 'react'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Catalog from './components/Catalog/Catalog';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <>
      <Header className='header__container'/>
    <main>
      <Navigation />
      <Catalog />
      <Footer />
    </main>
    </>
  );
}

 
