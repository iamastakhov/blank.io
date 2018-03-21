import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import After from './Block/After/Block';
import Atom from './Block/Atom/Block';
import Cinema from './Block/Cinema/Block';
import Illustrator from './Block/Illustrator/Block';
import Indesign from './Block/Indesign/Block';
import Term from './Block/Term/Block';
import Keynote from './Block/Keynote/Block';
import Photoshop from './Block/Photoshop/Block';
import Premiere from './Block/Premiere/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="Skills" >
<div className={s.Container}>


  <After />
  <Atom />
  <Cinema />
  <Illustrator />
  <Indesign />
  <Term />
  <Keynote />
  <Photoshop />
  <Premiere />


</div>


<div className={cx(s.Background, s.Color)} />


</div>


);
}
}


export default withStyles(s)(Section);
