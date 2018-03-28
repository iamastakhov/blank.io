import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import IconUrl from './Icon.png';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <a className={s.Button} href="">
  <img className={s.Icon} src={IconUrl} alt="" />
  </a>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
