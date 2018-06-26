import React, { Component } from 'react';
import Navigation from './Navigation';
import Statistics from './Statistics';
import Carousel from './Caroussel';
import About from './About';
import News from './News';
import Features from './Features';
import Price from './Price';
import BitcoinCalculator from '../BitcoinCalculator/BitcoinCalculator';
import Team from './Team';
import Quote from './Quote';
import BitcoinChart from './BitcoinChart';
import Logo from '../Logo/Logo'
import UserAction from './UserAction';
import BeginTrade from '../BeginTrade/BeginTrade';

class Home extends Component {
  render() {
    let isLogged = false;
    if(sessionStorage.getItem('access_token')){
      isLogged = true;
    }
    return (
      <div className="App">
      {/* Wrapper Starts */}
        <div className="wrapper">
          {/* Header Starts */}
          <div className="header">
            <div className="container">
              <div className="row">
                {/* Logo Starts */}
                  <Logo />
                {/* Logo Ends */}
                {/* Statistics Starts */}
                  <Statistics />
                {/* Statistics Ends */}
                {/* User Sign In/Sign Up Starts */}
                  <UserAction isLogged={isLogged}/>
                {/* User Sign In/Sign Up Ends */}
              </div>
            </div>
            {/* Navigation Menu Starts */}
              <Navigation />
            {/* Navigation Menu Ends */}
            </div>
          {/* Header Ends */}

          {/* Slider Starts */}
            <Carousel />
          {/* Slider Ends */}

          {/* Blog Section Starts */}
            <News />
          {/* Blog Section Ends */}

          {/* About Section Starts */}
            <About />
          {/* About Section Ends */}

          {/* Features and Video Section Starts */}
            <Features />
          {/* Features and Video Section Ends */}

          {/* Pricing Starts */}
            <Price />
          {/* Pricing Ends */}

          {/* Bitcoin Calculator Section Starts */}
            <BitcoinCalculator />
          {/* Bitcoin Calculator Section Ends */}

          {/* Team Section Starts */}
            <Team />
          {/* Team Section Ends */}

          {/* Quote and Chart Section Starts */}
          <div className="image-block2">
            <div className="container-fluid">
              <div className="row">
                {/* Quote Starts */}
                  <Quote />
                {/* Quote Ends */}

                {/* Chart Starts */}
                  <BitcoinChart />
                {/* Chart Ends */}
              </div>
            </div>
          </div>
          {/* Quote and Chart Section Ends */}

          {/* Call To Action Section Starts */}
            <BeginTrade isLogged={isLogged}/>
          {/* Call To Action Section Ends */}
        {/* Wrapper Ends */}
        </div>
      </div>
    );
  }
}

export default Home;
