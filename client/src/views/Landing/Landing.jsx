import React from "react";
import videoLanding from "../../assets/video_landing.mp4";
import "./landing.css"
import {useNavigate} from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();


    return(
        <div className="landing">
            <video src={videoLanding} autoPlay loop muted className="video-lp" data-testid="video-lp"/>
            <div className="lp-overlay"></div>

            <div className="home-text">
                <h1 className="intro-landing-h">Individual Project - Food</h1>
                <p className="intro-landing">Transform your kitchen into a culinary adventure</p>
            </div>

            <div className="home-btn" onClick={()=>navigate("/home")} data-testid="home-btn">Explore</div>
        </div>
    )
}

//"Un mundo de sabores a tu alcance"
//"Transforma tu cocina en una aventura culinaria"
//"Descubre nuevas recetas y haz tu cocina más variada"

export default Landing;