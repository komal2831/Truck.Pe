import React, { Component } from 'react';
import './main.css';

class BackgroundImage extends Component {

    render() {
        return (
            <div id="slides" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/background.jpg" />
                        <div className="carousel-caption">
                        <h2 className="display-1">-------FAST AND SAVE-------</h2>
                            <h1 class="display-2">TRANSPORTATION</h1>
                            <h3>Freight,warehousing,accounting,packaging and distribution are just a few</h3>
                            <h3>examples of what we can do to ensure your success</h3>
                            <button type="button" class="btn m-1 btn-outline-light btn-lg" >OVER ADVANTAGES</button>
                            <button type="button" class="btn m-1 btn-primary btn-lg">VIRTUAL TOUR</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BackgroundImage;