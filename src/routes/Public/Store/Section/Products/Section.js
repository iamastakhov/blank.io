import React from 'react';


import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Product1 from './Block/Product1/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section} id="products" >
<div className={s.Container}>


<Product1 />
<Product1 />
<Product1 />
<Product1 />


</div>


<div className={cx(s.Background, s.Color)} />


</div>


); } }


export default withStyles(s)(Section);
