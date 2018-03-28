import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import { FaFlickr } from 'react-icons/lib/fa';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <a href="">
  <FaFlickr className={s.Icon} />
  </a>


</div>
</div>


);
}
}


export default withStyles(s)(Block);
