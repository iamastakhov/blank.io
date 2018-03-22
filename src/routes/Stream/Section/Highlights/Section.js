import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';
import carousel from 'pure-react-carousel/dist/react-carousel.es.css';


import { Slider, Slide } from 'pure-react-carousel';


import Highlight1 from './Block/Highlight1/Block';
import Highlight2 from './Block/Highlight2/Block';
import Highlight3 from './Block/Highlight3/Block';


import VideoUrl from './Video.mp4';
import ImageUrl from './Image.jpg';


class Section extends React.Component {


    state = { slideIndex: 0 };
    

render() {
return (


<Slider className={s.Section}>
<Slide index={0}>
<div className={s.Container}>


    <Highlight1 />


</div>


    <div className={cx(s.Background, s.Overlay)} />
    <video className={cx(s.Background, s.Video)} src={VideoUrl} type="video/mp4" loop autoPlay />


</Slide>


<Slide index={1}>
<div className={s.Container}>


    <Highlight2 />
    <Highlight3 />


</div>


    <div className={cx(s.Background, s.Overlay)} />
    <img className={cx(s.Background, s.Image)} src={ImageUrl} />


</Slide>


<Slide index={2}>
<div className={s.Container}>


    <Highlight3 />


</div>


    <div className={cx(s.Background, s.Color)} />


</Slide>


</Slider>


); } }


export default withStyles(s,carousel)(Section);