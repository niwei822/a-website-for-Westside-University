import React from 'react';
import Header from './Header';

const Home = () => {
  return (
    <div className='main'>
      <Header />
      <div className='box'>
        <button className='btn'>Math 1010</button>
        <button className='btn'>English 2010</button>
        <button className='btn'>Biology 2020</button>
      </div>
    </div>
  )
}

export default Home
