import React from 'react';
import Scrollchor from 'react-scrollchor';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Scrollchor 
    className={s.Button} 
    to="services"
  >
  <span className={s.Title}>
    Section 1
  </span>
  </Scrollchor>


  <Scrollchor 
    className={s.Button}
    to="skills"
  >
  <span className={s.Title}>
    Section 2
  </span>
  </Scrollchor>


  <Scrollchor 
    className={s.Button} 
    to="bio"
  >
  <span className={s.Title}>
    Section 3
  </span>
  </Scrollchor>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
