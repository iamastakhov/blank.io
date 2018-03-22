import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';
import carousel from 'pure-react-carousel/dist/react-carousel.es.css';


import { Slider, Slide } from 'pure-react-carousel';


import Ad1 from './Block/Ad1/Block';
import Ad2 from './Block/Ad2/Block';
import Ad3 from './Block/Ad3/Block';


import VideoUrl from './Video.mp4';
import ImageUrl from './Image.jpg';


class Section extends React.Component {


    state = { slideIndex: 0 };
    

render() {
return (


<Slider className={s.Section}>
<Slide index={0}>
<div className={s.Container}>


    <Ad1 />
    <Ad2 />
    <Ad3 />


</div>


    <div className={cx(s.Background, s.Overlay)} />
    <video className={cx(s.Background, s.Video)} src={VideoUrl} type="video/mp4" loop autoPlay />


</Slide>


<Slide index={1}>
<div className={s.Container}>


    <Ad1 />
    <Ad2 />


</div>


    <div className={cx(s.Background, s.Overlay)} />
    <img className={cx(s.Background, s.Image)} src={ImageUrl} />


</Slide>


<Slide index={2}>
<div className={s.Container}>


    <Ad3 />


</div>


    <div className={cx(s.Background, s.Color)} />


</Slide>


</Slider>


); } }


export default withStyles(s,carousel)(Section);