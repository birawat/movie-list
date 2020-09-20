import React, {Component} from 'react';

class Popup extends React.Component {
  constructor(props) {
    super()
  } 
 
  render() {
    return (
      <div className='popup'>
          <div className="modal-content">
            <div className="modal-header">
              <h2>Movie Details</h2>
            </div>
            <div className="modal-body">
              <div class="row">
                <div>
                  <b>Movie Title</b>:
                </div>
                <div className="text">
                  {this.props.movie.title}
                </div>
              </div>
              <div class="row">
                <div >
                  <b>The Director’s Name</b>:
                </div>
                <div className="text">
                  {this.props.movie.director}
                </div>
              </div>
              <div class="row">
                <div>
                  <b>Producer’s Name</b>:
                </div>
                <div className="text">
                  {this.props.movie.producer}
                </div>
              </div>
              <div class="row">
                <div>
                  <b>Year of Release</b>:
                </div>
                <div className="text">
                  {this.props.movie.release_date}
                </div>
              </div>
              <div class="row">
                <div>
                  <b>Movie’s Rating(IMDB)</b> :
                </div>
                <div className="text">
                  {this.props.movie.rt_score}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-close" onClick={this.props.closePopup}>Close</button>      
            </div>
          </div>
      </div>
    );
  }
}
export default Popup