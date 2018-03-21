import React from 'react';


import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Section.css';


import Masonry from 'react-masonry-component';


import MediumPost from './Block/MediumPost/Block';
import FacebookPost from './Block/FacebookPost/Block';
import FacebookEvent from './Block/FacebookEvent/Block';
import FacebookImage from './Block/FacebookImage/Block';
import FacebookAlbum from './Block/FacebookAlbum/Block';
import FacebookVideo from './Block/FacebookVideo/Block';
import SlidesharePresentation from './Block/SlidesharePresentation/Block';
import GithubRepository from './Block/GithubRepository/Block';
import BehancePost from './Block/BehancePost/Block';
import DribbbleImage from './Block/DribbbleImage/Block';
import FlickrImage from './Block/FlickrImage/Block';
import FlickrGallery from './Block/FlickrGallery/Block';
import PinterestImage from './Block/PinterestImage/Block';
import PinterestBoard from './Block/PinterestBoard/Block';
import InstagramImage from './Block/InstagramImage/Block';
import InstagramVideo from './Block/InstagramVideo/Block';
import YoutubeVideo from './Block/YoutubeVideo/Block';
import YoutubePlaylist from './Block/YoutubePlaylist/Block';
import VimeoVideo from './Block/VimeoVideo/Block';
import SoundcloudAudio from './Block/SoundcloudAudio/Block';
import SoundcloudPlaylist from './Block/SoundcloudPlaylist/Block';


class Section extends React.Component {


render() {
return (


<div className={s.Section}>
<div className={s.Container}>
<div>


<Masonry >


<FacebookPost />
<FacebookEvent />
<FacebookImage />
<MediumPost />
<FacebookAlbum />
<FacebookVideo />
<SlidesharePresentation />
<GithubRepository />
<BehancePost />
<DribbbleImage />
<FlickrImage />
<FlickrGallery />
<PinterestImage />
<PinterestBoard />
<InstagramImage />
<InstagramVideo />
<YoutubeVideo />
<YoutubePlaylist />
<VimeoVideo />
<SoundcloudAudio />
<SoundcloudPlaylist />


</Masonry >


</div>
</div>
</div>


);
}
}


export default withStyles(s)(Section);
