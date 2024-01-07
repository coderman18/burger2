import React from 'react'
import Container from './components/Container/Container';
import Header from './components/Header/Header';


export default function App() {
  return (
    <>
      <Header className='header__container'/>
    <main>
      <nav>
        <Container className='navigation__container'/>
      </nav>
      <section></section>
      <footer></footer>
    </main>
    </>
  );
}

 
