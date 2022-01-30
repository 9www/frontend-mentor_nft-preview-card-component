import React from "react";
import "./Cards.scss";

function Cards() {
    return (
        <div className="cards-container">
            <a className="cards-images-container" href="./">
                <img
                    className="cards-image"
                    src="./images/image-equilibrium.jpg"
                ></img>
                <div className="cards-image-overlay">
                    <img
                        className="cards-image-overlay-icon"
                        src="./images/icon-view.svg"
                    ></img>
                </div>
            </a>
            <div className="cards-detail-container">
                <a className="cards-title" href="./">
                    Equilibrium #3429
                </a>
                <div className="cards-description">
                    Our Equilibrium collection promotes balance and calm.
                </div>
                <div className="cards-price-time-container">
                    <div className="cards-price-container">
                        <img
                            className="cards-price-icon"
                            src="./images/icon-ethereum.svg"
                        ></img>
                        <div className="cards-price">0.041ETH</div>
                    </div>
                    <div className="cards-time-container">
                        <img
                            className="cards-time-icon"
                            src="./images/icon-clock.svg"
                        ></img>
                        <div className="cards-time">3 days left</div>
                    </div>
                </div>
            </div>
            <div className="cards-line"></div>
            <div className="cards-creator-container">
                <img
                    className="cards-icon"
                    src="./images/image-avatar.png"
                ></img>
                <div className="cards-creator">
                    Creation of{" "}
                    <a className="cards-name" href="./">
                        Jules Wyvern
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cards;
