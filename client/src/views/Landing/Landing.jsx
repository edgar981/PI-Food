/*
Botón para ingresar al home (Ruta principal)

 */
// import videoLoop from "../../assets/video_food.mp4"
import videoLanding from "../../assets/video_landing.mp4"

const Landing = () => {

    return(
        <div className="landing">
            <video src={videoLanding} autoPlay loop muted className="video-lp"/>
            <div className="lp-overlay"></div>
            <button>GET STARTED</button>
        </div>
    )
}

export default Landing;