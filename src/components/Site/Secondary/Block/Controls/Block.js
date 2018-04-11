import React from 'react';
import { FaPlay, FaDownload } from 'react-icons/lib/fa';

import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Block.css';

import Link from '../../../../Link';
import CV from './CV.pdf';


class Block extends React.Component {

render() {
return (


<div className={s.Block}>
<div className={s.Container}>


  <a 
    className={cx(s.Button, s.Highlight)}
    href="https://vimeo.com/olegask/video"
    target="_blank"
  >
  <FaPlay className={cx(s.Glyph, s.Left)} />
  <span className={s.Title}>
    Play Video
  </span>
  </a>

  <a 
    className={s.Button}
    href={CV}
    download
  >
  <FaDownload className={cx(s.Glyph, s.Left)} />
  <span className={s.Title}>
    Download White Papper
  </span>
  </a>


</div>
</div>


); } }


export default withStyles(s)(Block);
