import React from 'react';
import Sticky from 'react-stickynode';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

import Header from '../../components/Section/Header/Section';
import Secondary from '../../components/Section/Secondary/Intro';
import Anchor from '../../components/Section/Anchor/Section';
import Services from './Section/Services/Section';
import Skills from './Section/Skills/Section';
import Bio from './Section/Bio/Section';


class Page extends React.Component {
render() {
return (


<div className={s.Page}>


  <Header />
  <Secondary />

  <Sticky innerZ={100}>
  <Anchor />
  </Sticky>


  <Services />
  <Skills />
  <Bio />


</div>


); } }


export default withStyles(s)(Page);