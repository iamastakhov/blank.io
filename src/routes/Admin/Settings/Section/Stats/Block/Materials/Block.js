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
    Files
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
    Storage
  </span>
  <span className={s.Counter}>
    13 files / 1.8 GB
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
  Text
</span>
<span className={s.Counter}>
  1 file / 121 MB
</span>
</Link>

<Link className={s.Button} 
  to="/stream#"
>
<span className={s.Title}> 
  Images
</span>
<span className={s.Counter}>
  65 files / 0.4 GB
</span>
</Link>

<Link className={s.Button} 
  to="/stream#"
>
<span className={s.Title}> 
  Videos
</span>
<span className={s.Counter}>
  14 files / 0.8 GB
</span>
</Link>

<Link className={s.Button} 
  to="/stream#"
>
<span className={s.Title}> 
  Other
</span>
<span className={s.Counter}>
  21 files / 0.1 GB
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
