import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function NewMoive({ newmoviesdata }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [btnvisible, setBtnVisible] = useState(false);

  // console.log(newmoviesdata);
  
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
                <li key={index}
                  style={{
                    position: "absolute",
                    left: `${(index - currentIndex) * 300}px`,
                    transition: "left 0.5s ease-in-out",
                    listStyle: "none"
                  }}
                >
                  <Link to={`/detail/${element._id}/${encodeURIComponent(element.original_title)}/${element.backdrop_path ? encodeURIComponent(element.backdrop_path) : 'default-image-path'}`}>
                    <div className='sendingdata' style={{ width: "240px", height: "338px", borderRadius: "10px", backgroundImage: `URL(${element.poster_path})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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

NewMoive.propTypes = {
  newmoviesdata: PropTypes.array,
};
