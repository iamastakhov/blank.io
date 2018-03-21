import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';
import carousel from 'pure-react-carousel/dist/react-carousel.es.css';


import { Slider, Slide } from 'pure-react-carousel';


import Highlight1 from './Block/Highlight1/Block';
import Highlight2 from './Block/Highlight2/Block';
import Highlight3 from './Block/Highlight3/Block';


import VideoUrl from './Block/Highlight1/Video.mp4';
import ImageUrl from './Block/Highlight2/Image.jpg';


class Section extends React.Component {


state = { slideIndex: 0 };


render() {
return (


<Slider className={s.Section}>
<Slide index={0}>
<div className={s.Container}>


  <Highlight1 />
  <video className={cx(s.Background, s.Video)} src={VideoUrl} type="video/mp4" loop autoPlay />
  <div className={cx(s.Background, s.Color)} />
  

</div>
</Slide>


<Slide index={1}>
<div className={s.Container}>


  <Highlight2 />
  <img className={cx(s.Background, s.Image)} src={ImageUrl} />
  <div className={cx(s.Background, s.Color)} />


</div>
</Slide>


<Slide index={2}>
<div className={s.Container}>


  <Highlight3 />
  <div className={cx(s.Background, s.Color)} />


</div>
</Slide>


</Slider>


); } }


export default withStyles(s,carousel)(Section);