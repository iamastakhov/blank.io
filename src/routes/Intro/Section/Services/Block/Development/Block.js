import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../../Block.css';


import Link from '../../../../../../components/Link';


class Block extends React.Component {


render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <h4 className={s.Title}>
    Development
  </h4>


  <h6 className={s.Description}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
    tincidunt, purus nec scelerisque lacinia. Lorem ipsum dolor sit amet, 
    consectetur.
  </h6>


  <hr className={s.Divider} />


  <div className={s.List}>


    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #html
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #css
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #scss
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #javascript
    </span>
    </Link>

    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #react
    </span>
    </Link>
    <Link className={s.Item} to="">
    <span className={s.Title}> 
      #node
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
