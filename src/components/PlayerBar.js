import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
      <section id="buttons">
         <button id="previous" onClick={this.props.handlePrevClick}>
          <span className="ion-skip-backward">Previous</span>
        </button>
         <button id="play-pause" onClick={this.props.handleSongClick} >
           <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}>Play</span>
        </button>
        <button id="next" onClick={this.props.handleNextClick}>
          <span className="ion-skip-forward">Next</span>
        </button>
      </section>
      <section id="time-control">
      <div className="current-time">{formatTime(this.props.currentTime)}</div>
         <input
           type="range"
           className="seek-bar"
           value={formatTime(this.props.currentTime / this.props.duration) || 0}
           max="1"
           min="0"
           step="0.01"
           onChange={this.props.handleTimeChange}
         />
         <div className="current-volume">{this.props.volume}</div>
      </section>
       <section id="volume-control">
          <span className="icon ion-volume-low"></span>
          <input type="range"
            className="seek-bar"
            value={this.props.volume}
            min="0"
            max="1"
            step="0.01"
            onChange={this.props.handleVolumeChange}
            />
          <span className="icon ion-volume-high"></span>
        </section>
</section>
    );
  }
}

export default PlayerBar;
