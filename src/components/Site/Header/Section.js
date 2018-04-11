import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Branding from './Block/Branding/Block';
import Description from './Block/Description/Block';
import BackgroundImageUrl from './Background.gif';
/* import VideoUrl from './Video.mp4'; */



class Section extends React.Component {


render() {
return (


<div className={s.Section} id="header" >
<div className={s.Container}>
<div>


<div className={s.Left}>
  <Branding />
</div>


<div className={s.Right}>
  <Description />
</div>


</div>
</div>


<div className={cx(s.Background, s.Overlay)} />
{/* <video className={cx(s.Background, s.Video)} src={VideoUrl} type="video/mp4" loop autoPlay /> */}
<img className={cx(s.Background, s.Image)} src={BackgroundImageUrl} type="video/mp4" loop autoPlay />
<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);