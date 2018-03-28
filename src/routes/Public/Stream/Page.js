import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import Sticky from 'react-stickynode';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

import Secondary from '../../../components/Section/Secondary/Stream';
import Search from '../../../components/Section/Search/Stream';

import Highlights from './Section/Highlights/Section';
import Posts from './Section/Templates/Section';


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


  <Highlights />
 
  <Secondary />


</CarouselProvider>

  <Sticky innerZ={100}>
  <Search />
  </Sticky>

  <Posts />


</div>


); } }


export default withStyles(s)(Page);
