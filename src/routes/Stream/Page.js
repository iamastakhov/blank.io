import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

import Navigation from '../../components/Section/Navigation/Section'
import Secondary from '../../components/Section/Secondary/Stream'
import Highlights from './Section/Highlights/Section'
import Posts from './Section/Templates/Section'


class Page extends React.Component {
render() {
return (


<div className={s.Page}>


  <Navigation />


  <CarouselProvider
    className={s.Carousel}
    naturalSlideWidth={160}
    naturalSlideHeight={80}
    totalSlides={3}
  >

  <Highlights />
 
  <Secondary />

  </CarouselProvider>


  <Posts />


</div>


); } }


export default withStyles(s)(Page);
