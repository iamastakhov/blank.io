import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import Sticky from 'react-stickynode';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

import Secondary from '../../components/Section/Secondary/Store';
import Ads from './Section/Ads/Section';
import Search from '../../components/Section/Search/Store'
import Products from './Section/Products/Section';


class Page extends React.Component {
render() {
return (


<div className={s.Page}>


  <CarouselProvider
    className={s.Carousel}
    naturalSlideWidth={160}
    naturalSlideHeight={80}
    totalSlides={3}
  >

  <Ads />

  <Secondary />

  </CarouselProvider>

  <Sticky innerZ={100}>
  <Search />
  </Sticky>

  <Products />


</div>


); } }


export default withStyles(s)(Page);


