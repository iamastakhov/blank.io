import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import LogotypeUrl1 from './Logotype.png';
import LogotypeUrl2 from './Logotype.png';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <img 
    className={s.Logotype} 
    src={LogotypeUrl1} 
    srcSet={`${LogotypeUrl2} 2x`}
    alt=""
  />
  

</div>
</div>


);
}
}


export default withStyles(s)(Block);