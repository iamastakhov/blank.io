import React from 'react';
import { Slider, Slide } from 'pure-react-carousel';
import carousel from 'pure-react-carousel/dist/react-carousel.es.css';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import FacebookPost from '../Templates/Block/FacebookPost/Block';
import FacebookEvent from '../Templates/Block/FacebookEvent/Block';
import FacebookImage from '../Templates/Block/FacebookImage/Block';
import FacebookAlbum from '../Templates/Block/FacebookAlbum/Block';
import FacebookVideo from '../Templates/Block/FacebookVideo/Block';

import VideoUrl from './Video.mp4';
import ImageUrl from './Image.jpg';


class Section extends React.Component {


    state = { slideIndex: 0 };
    

render() {
return (


<Slider className={s.Section} id="highlights">
<Slide index={0}>
<div className={s.Container}>


    <FacebookEvent />


</div>


    <div className={cx(s.Background, s.Color)} />


</Slide>


<Slide index={1}>
<div className={s.Container}>

    <FacebookImage />
    <FacebookPost />
    <FacebookAlbum />

</div>


    <div className={cx(s.Background, s.Overlay)} />
    <img className={cx(s.Background, s.Image)} src={ImageUrl} />
    <div className={cx(s.Background, s.Color)} />


</Slide>


<Slide index={2}>
<div className={s.Container}>


    <FacebookVideo />


</div>


    <div className={cx(s.Background, s.Overlay)} />
    <video className={cx(s.Background, s.Video)} src={VideoUrl} type="video/mp4" loop autoPlay />
    <div className={cx(s.Background, s.Color)} />


</Slide>


</Slider>


); } }


export default withStyles(s,carousel)(Section);