import React from 'react';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';

import Masonry from 'react-masonry-component';


class Section extends React.Component {
render() {
return (


<div className={s.Section} id="Products" >
<div className={s.Container}>
<Masonry>


</Masonry>
</div>


<div className={cx(s.Background, s.Color)} />


</div>


); } }


export default withStyles(s)(Section);