import React, { useState, useEffect } from "react";
import Navigation from "../header/Navigation";
import WelcomePage from "../pages/welcomepage/WelcomePage";
import Story from "../pages/story/Story";
import Collection from "../pages/collection/Collection";
import Team from "../pages/team/Team";
import Tokenomic from "../pages/tokenomic/Tokenomic";
import Lottery from "../pages/lottery/Lottery";
import WhiteList from "../pages/whitelist/WhiteList";
import Roadmap from "../pages/roadmap/RoadMap";
import FAQ from "../pages/faq/FAQ";
import Footer from "../footer/Footer";

const Main = () => (
  <>
    <Navigation />
    <WelcomePage />
    <Story />
    <Collection />
    <Team />
    <Tokenomic />
    <Lottery />
    <WhiteList />
    <Roadmap />
    <FAQ />
    <Footer />
  </>
);

export default Main;
