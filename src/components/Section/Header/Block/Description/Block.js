import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';



class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h3 className={s.Headline}>
    Hello, my name's
  </h3>


  <h2 className={s.Title}>
    Oleg Asko.
  </h2>


  <h5 className={s.Description}>
    Anytime. Anywhere.
    Look around. Explore.
    Interest trigger imagination.
    Borders are transparent.
    Sprayed focus. 
  </h5>
  

</div>
</div>


);
}
}


export default withStyles(s)(Block);