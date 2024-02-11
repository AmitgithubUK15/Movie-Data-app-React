import PropsType from 'prop-types'

function Treaser({treaser,backdropPathposter}){

    return(
        <>
        <div className="videosection">
                    <div style={{ textAlign: "left" }}>
                        <h1>
                            <span>Treaser</span>
                        </h1>
                    </div>
                    <div className="vidoewrp"  style={{ width: "50%", height: "340px", overflow: "hidden", borderRadius: "15px" }}>
                        <video controls  poster={`${backdropPathposter}`}  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}>
                            <source src={`${treaser}`} type="video/mp4"></source>
                        </video>
                    </div>
        </div>
        </>
    )
}

export default Treaser;

Treaser.propsTypes= {
    treaser: PropsType.video,
}