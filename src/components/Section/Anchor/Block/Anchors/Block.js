import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import Scrollchor from 'react-scrollchor';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <Scrollchor className={s.Button} to="Services">
    <span className={s.Title}>
      Services
    </span>
  </Scrollchor>


  <Scrollchor className={s.Button} to="Skills">
    <span className={s.Title}>
      Skills
    </span>
  </Scrollchor>


  <Scrollchor className={s.Button} to="Bio">
    <span className={s.Title}>
      Bio
    </span>
  </Scrollchor>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
