import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Style.css'

export default function NewMovie({ newmoviesdata }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [btnvisible, setBtnVisible] = useState(false);
  const [slideindex, setslideindex] = useState();

  function scrollRight() {
    let newIndex = (currentIndex + 5) % newmoviesdata.length;
    setCurrentIndex(newIndex);
  }

  function scrollLeft() {
    console.log("scrollLeft");
    // Implement your scrollLeft logic here if needed
  }

  function showBtn() {
    setBtnVisible(true);
  }

  function hideBtn() {
    setBtnVisible(false);
  }

  function handleMouseEnter(index) {
    setslideindex(index);
  }

  function handleMouseLeave() {
    setslideindex(false);
  
  }

  return (
    <div className="n_movie_wrp">
      <div className="wrp_child">
        <div className="listwrp" onMouseOver={showBtn} onMouseLeave={hideBtn}>
          {btnvisible && 
            <div className='leftbtn'>
              <button className='n_m_btn' style={{ display: "block" }} onClick={scrollLeft}>
                <MdKeyboardArrowLeft className='arrow_icon' />
              </button>
            </div>
          }

          <div className='n_m_slider'>
            <ul>
              {newmoviesdata && newmoviesdata.map((element, index) => (

                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    position: "absolute",
                    left: `${(index - currentIndex) * 300}px`,
                    transition: "left 0.5s ease-in-out",
                    listStyle: "none",
                    
                  }}
                >


                  <Link to={`/detail/${element._id}/${encodeURIComponent(element.original_title)}/${element.backdrop_path ? encodeURIComponent(element.backdrop_path) : 'default-image-path'}`} style={{textDecoration:"none"}}>
                  
                   <img src={`${element.poster_path}`} alt="" className={`movieimages ${slideindex === index ? "blurimg" : ""}`}/>
                    <div className={`sendingdata ${slideindex === index ? "showwrp": ""}`}>
                      
                       <div className='moviedetailwrp' >

                        <h2 style={{margin:"10px 0"}}>
                          <span style={{color:"white",fontFamily:"sans-serif" }}>{element.original_title}</span>
                        </h2>

                          <span style={{color:"white",fontSize:"30px"}}>{element.contentType}</span> <br></br>
                           <span style={{color:"white", fontSize:"20px"}}>{element.genres[0]}</span> <br></br>
                           <span style={{color:"white", fontSize:"20px"}}>{element.genres[1]}</span><br></br>
                      </div>
                    
                    </div>
                  </Link>
                </li>
              ))} 
            </ul>
          </div>

          {btnvisible &&
            <div className='rigthbtn2'>
              <button className='n_m_btn2' style={{ display: "block" }}>
                <MdKeyboardArrowRight className='arrow_icon'  onClick={scrollRight} />
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

NewMovie.propTypes = {
  newmoviesdata: PropTypes.array,
};






// style={{overflow:"hidden",  width: "240px", height: "338px", borderRadius: "10px", backgroundImage: `URL(${element.poster_path})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}