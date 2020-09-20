import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../action/action'
import Popup from "./popup.component";
import imageIcon from "../asset/poster.ico";

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
          showPopup: false,
          movieDetails: {}
        };
    }
    togglePopup(item) {
        this.setState({
            showPopup: !this.state.showPopup,
            movieDetails: item
        });
    }

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
       
        const { movies } = this.props;

        let movieList = movies.movies ?                
             movies.movies.map(item => {
                    return (
                        <div className="list-container" key={item.id}>
                            <div className="col-long">
                                <a onClick = {(e) => {this.togglePopup(item)}}>{item.title}</a> 
                            </div>
                            <div className="col-long">
                                {item.director}
                            </div>
                            <div className="col-long">                            
                                {item.rt_score}
                            </div>
                            <div className="col-short">
                               <img src={imageIcon} alt="true"></img>
                            </div>
                        </div>
                    )
                }) : <div className="center-text"> Loading Movies list ... </div>;
        return(
            <div className="preview">
                <div className="header-container">
                    <div className="col-long"><b>Movie Title</b></div>
                    <div className="col-long"><b>Director</b></div>
                    <div className="col-long"><b>Rating</b></div>
                    <div className="col-short"><b>Poster</b></div>
                </div>
                {movieList}
                {this.state.showPopup ? 
                    <Popup
                        text='Close Me'
                        closePopup={this.togglePopup.bind(this)}
                        movie = {this.state.movieDetails}
                    />
                : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {

    return { movies : state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch(fetchMovies())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies); 