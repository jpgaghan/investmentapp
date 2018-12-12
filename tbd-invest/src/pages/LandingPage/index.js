import React, { Component } from 'react';
import NewsCarousel from '../../components/Carousel';
import TickerCard from "../../components/TickerCard";
import SearchForm from "../../components/Search";
import WordLookup from '../../components/WordLookup';

const LandingPage = ({ userid }) => (
  <div>
    <div>
      <div>
        <div>
          <NewsCarousel />
          <SearchForm uid={userid} />
          {/* <Charts /> */}
        </div>
      </div>
    </div>
    {/* <Charts /> */}


    <div className="tickerContainer">
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
      <TickerCard />
    </div>


    <div className="WordLookupContainer">
      <WordLookup />
    </div>

  </div>
);

export default LandingPage;