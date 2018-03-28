import React from 'react';

import Masonry from 'react-masonry-component';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Container.css';

import MediumPost from './MediumPost/Block';
import FacebookPost from './FacebookPost/Block';
import FacebookEvent from './FacebookEvent/Block';
import FacebookImage from './FacebookImage/Block';
import FacebookAlbum from './FacebookAlbum/Block';
import FacebookVideo from './FacebookVideo/Block';
import SlidesharePresentation from './SlidesharePresentation/Block';
import GithubRepository from './GithubRepository/Block';
import BehancePost from './BehancePost/Block';
import DribbbleImage from './DribbbleImage/Block';
import FlickrImage from './FlickrImage/Block';
import FlickrGallery from './FlickrGallery/Block';
import PinterestImage from './PinterestImage/Block';
import PinterestBoard from './PinterestBoard/Block';
import InstagramImage from './InstagramImage/Block';
import InstagramVideo from './InstagramVideo/Block';
import YoutubeVideo from './YoutubeVideo/Block';
import YoutubePlaylist from './YoutubePlaylist/Block';
import VimeoVideo from './VimeoVideo/Block';
import SoundcloudAudio from './SoundcloudAudio/Block';
import SoundcloudPlaylist from './SoundcloudPlaylist/Block';


class Container extends React.Component {

  render() {
    return (


      <div className={s.Container}>


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

    );
  }
}


export default withStyles(s)(Container);
