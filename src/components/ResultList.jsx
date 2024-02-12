import PropsType from "prop-types"
import { useState } from "react";
import { Link } from 'react-router-dom'


function ResultList({ data }) {

    const [imgindex, setindex] = useState();
    const [divindex,setdivindex] = useState();

    function handlezoom(index) {
        setindex(index);
        setdivindex(index);
    }

    function setnormal() {
        setindex(null);
        setdivindex(null);
    }

    function handlediv(index) {
        setdivindex(index);
    }

    function setnormaldiv() {
        setdivindex(null);
    }


    return (
        <div>
            {data.length > 0 && data.map((val, index) => (
                <div key={index} className= {`movie-list-item ${divindex === index ? "list_innerHover":""}`} onMouseEnter={()=>handlediv(index)} onMouseLeave={setnormaldiv}>
                    <div className="list_inner_wrp">
                        <div className="list_inner_wrp2" >
                            <div className="leftsidepull">
                                <div className="item_poster_wrp" onMouseEnter={() => handlezoom(index)} onMouseLeave={setnormal}>
                                    <img src={`${val.poster_path}`} alt="" className={`poster_image ${imgindex === index ? "zoomingeffect" : ""}`} />
                                </div>
                            </div>
                            <div className="rightsidepull">
                                <div className="item_name">
                                    <h1 style={{ margin: "7px 0" }}>
                                        <span>{val.original_title}</span>
                                    </h1>
                                </div>
                                <div className="item_type">
                                    <span>{val.contentType === "Movie" ? "Movie" : "Show"}</span>
                                </div>
                                <div className="overview_para">
                                    <p>{val.contentType === "Movie" ? val.overview : val.seasons[0].overview}</p>
                                </div>
                                <div className="item_button">
                                    <Link to={val.contentType === "Movie" ? `/detail/${val._id}/${encodeURIComponent(val.original_title)}/${val.genres}/${encodeURIComponent(val.contentType)}/${encodeURIComponent(val.overview)}/${val.backdrop_path ? encodeURIComponent(val.backdrop_path) : 'val.backdrop_path'}` : `/seriesdetail/${encodeURIComponent(val._id)}
                                               /${encodeURIComponent(val.original_title)}
                                               /${encodeURIComponent(val.genres)}
                                               /${encodeURIComponent(val.contentType)}
                                               /${encodeURIComponent(val.trailer)}`} className="item_link">
                                        <button className="list_realBtn">Get details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}


export default ResultList;

ResultList.propsTypes = {
    data: PropsType.array,
}