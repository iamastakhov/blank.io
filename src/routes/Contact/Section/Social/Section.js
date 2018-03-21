import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Linkedin from './Block/Linkedin/Block';
import Facebook from './Block/Facebook/Block';
import Medium from './Block/Medium/Block';
import Github from './Block/Github/Block';
import Behance from './Block/Behance/Block';
import Flickr from './Block/Flickr/Block';
import Instagram from './Block/Instagram/Block';
import Youtube from './Block/Youtube/Block';
import Soundcloud from './Block/Soundcloud/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section}>
<div className={s.Container}>


  <Linkedin />
  <Facebook />
  <Medium />
  <Github />
  <Behance />
  <Flickr />
  <Instagram />
  <Youtube />
  <Soundcloud />


</div>


<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);
