import React from 'react'
//import { Nav, Portfolio, Socials, } from "../../components";
import Nav from '../components/Nav';
import Socials from '../components/Socials';
import { Portfolio } from '../components/Portfolio';

export const RecentWork = () => {
  return (
    <>
      <Nav />
        <Portfolio />
      <Socials />
    </>
  )
}
