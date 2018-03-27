import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';


import Link from '../../../../../../../components/Link';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h3 className={s.Title}>
    Contact me
  </h3>


  <h5 className={s.Description}>
    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
    There is no one who loves pain itself.
  </h5>
  

</div>
</div>


);
}
}


export default withStyles(s)(Block);