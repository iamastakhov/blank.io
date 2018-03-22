import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';


import Navigation from '../../components/Section/Navigation/Section';
import Header from '../../components/Section/Header/Section';
import Anchor from '../../components/Section/Anchor/Section';
import Services from './Section/Services/Section';
import Skills from './Section/Skills/Section';
import Bio from './Section/Bio/Section';
import Footer from '../../components/Section/Footer/Section';


import Sticky from 'react-stickynode';


class Page extends React.Component {

  
render() {
return (


<div className={s.Page}>


  <Navigation />
  <Header />

  <Sticky innerZ={100}>
  <Anchor />
  </Sticky>


  <Services />
  <Skills />
  <Bio />

  <Footer />


</div>


);
}
}


export default withStyles(s)(Page);