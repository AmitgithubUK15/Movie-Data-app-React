 import PropsType from 'prop-types';



    export default function DetailInfo({ treaser, content, Alang, Stitle, direc, produce, Stars }) {


        return (
            <div>
                <div className="infodata" style={{ display: "flex", textAlign: "left", width: "100%"  }}>
                    <div style={{width:"70%"}}>
                        <div style={{ width: "100%", textAlign: "left" }}>
                            <h1>
                                <span>More Info</span>
                            </h1>
                        </div>

                        <div style={{ width: "100%" }}>
                            <div>
                                <h2>Content advisory</h2>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}>{content}</p>
                            </div>
                            <div>
                                <h2>Audio Language</h2>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}>{Alang}</p>
                            </div>
                            <div>
                                <h2>Subtitles</h2>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}>{Stitle}</p>
                            </div>
                            <div>
                                <h2>Directors</h2>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}>{direc}</p>
                            </div>

                            <div>
                                <h2>Producers</h2>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}>{produce}</p>
                            </div>

                            <div>
                                <h2>Staring</h2>
                            </div>
                            <div>
                                <p style={{fontSize:"20px"}}>{Stars}</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }

    DetailInfo.propsTypes = {
        treaser: PropsType.video,
        seasons: PropsType.object,
    }
