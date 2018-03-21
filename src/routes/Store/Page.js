import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';


import { CarouselProvider } from 'pure-react-carousel';


import Navigation from '../../components/Section/Navigation/Section'
import Secondary from '../../components/Section/Secondary/Store'
import Ads from './Section/Ads/Section'


class Page extends React.Component {
render() {
return (


<div className={s.Page}>


  <Navigation />


  <CarouselProvider
    naturalSlideWidth={160}
    naturalSlideHeight={80}
    totalSlides={3}
  >

  
  <Ads />


  <Secondary />


  </CarouselProvider>


</div>


); } }


export default withStyles(s)(Page);


