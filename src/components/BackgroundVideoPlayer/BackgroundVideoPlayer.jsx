import React from 'react';
import './style.scss';

export default (props) => {
    return (
        <div id="react-content">
            <section id="video-container">
                <video autoPlay muted loop>
                    <source src={props.url} />
                </video>
                <div className="overlay"></div>
            </section>
        </div>
    );
}