import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';

import Link from '../../../../../../../components/Link';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


<div className={s.Row}>


  <h4 className={s.Title}>
    Pages
  </h4>

  <h6 className={s.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    tincidunt, purus nec scelerisque lacinia. Lorem ipsum dolor sit amet, 
    consectetur.
  </h6>

  <hr className={s.Divider} />  


</div>


<div className={s.Row}>


  <hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


  <Link className={s.Button} 
    to="/stream#"
  >
  <span className={s.Title}> 
    Intro
  </span>
  <span className={s.Counter}>
    6
  </span>
  </Link>


</div>


<div className={s.Row}>


<hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


<Link className={s.Button} 
  to="/stream#"
>
<span className={s.Title}> 
  Stream
</span>
<span className={s.Counter}>
  3
</span>
</Link>


</div>


<div className={s.Row}>


<hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


<Link className={s.Button} 
  to="/stream#"
>
<span className={s.Title}> 
  Store
</span>
<span className={s.Counter}>
  3
</span>
</Link>


</div>


<div className={s.Row}>


<hr className={s.Divider} />  


</div>


<div className={cx(s.Row, s.Bottom)}>


<Link className={s.Button} 
  to="/stream#"
>
<span className={s.Title}> 
  Contact
</span>
<span className={s.Counter}>
  5
</span>
</Link>


</div>


<div className={cx(s.Background, s.Color)} />
<div className={cx(s.Background, s.Shadow)} />


</div>
</div>


);
}
}


export default withStyles(s)(Block);
