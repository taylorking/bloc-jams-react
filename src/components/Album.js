import React, { Component } from 'react';
import albumData from './../data/albums';
import Ionicon from 'react-ionicons';

  class Album extends Component {
  constructor(props) {
       super(props);

       const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });

       this.state = {
       album: album,
       currentSong: album.songs[0],
       isPlaying: false
       };
        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
     }

     play() {
          this.audioElement.play();
          this.setState({ isPlaying: true });
     }

     pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });

    }

    onHover(song) {
         this.setState({ hovered: song });
    }

    offHover(song) {
         this.setState({ hovered: null });
    }

    setSong(song) {
        console.log(song);
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song, isPlaying:
       (this.state.isPlaying ? false : true)
        });
        console.log(this.state.isPlaying);
      }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
       this.pause();
     } else {
       if (!isSameSong) { this.setSong(song); }
       this.play();
      }
    }

    songClass(song) {
          if (this.state.currentSong === song) {
            if (this.state.isPlaying) {
              return 'song-playing';
            } else {
              return 'song';
            }
          }
        return 'song';

      }


     render() {
       return (
         <section className="album">
         <section id="album-info">
         <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
           <h1 id="album-title">{this.state.album.title}</h1>
           <h2 className="artist">{this.state.album.artist}</h2>
          <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
         <colgroup>
           <col id="song-number-column" />
           <col id="song-title-column" />
           <col id="song-duration-column" />
         </colgroup>
         <section>
         <table>
         <tbody>
         this.state.album.songs.map((song, index) =>
             <tr> className="song" key={index} onClick={() => this.handleSongClick(song)}>
             <td onMouseEnter={() => this.onHover(song)} onMouseLeave={() => this.offHover(song)}></td>
             <td> <ion-icon name="play"></ion-icon></td>
             <td> <ion-icon name="pause"></ion-icon></td>
             <td> {song.title}</td>
             <td> {song.duration}</td>
             </tr>
           )}
         </tbody>
        </table>
      </section>
    );
  }
}



export default Album;
