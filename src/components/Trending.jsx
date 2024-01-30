import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Trending({ trendingsid, isSpecial}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentIndexleft, setCurrentIndexleft] = useState(24);

  function handleRightScroll() {
    const newIndex = (currentIndex + 1) % trendingsid.length;
    setCurrentIndex(newIndex);
  }

  function leftscroller(){
    const newIndex = (currentIndex - 1 + trendingsid.length) % trendingsid.length;
    setCurrentIndex(newIndex);
  }
  return (
    <div className='trnedingdiv_wrp'>
      <div className='wrp'>
        <div className='headingwrp'>
          <h1>
            <span style={{ color: 'yellow' }}>T</span>
            <span>rending </span>
            <span style={{ color: 'yellow' }}>S</span>
            <span>how </span>
            <span> And </span>
            <span style={{ color: 'yellow' }}>M</span>
            <span>ovies </span>
          </h1>
        </div>
        <div className='imagediv'>
          <div style={{ alignSelf: 'center' }}>

            <button onClick={leftscroller}>L</button>
          </div>

          <div className='trendmoviewrp'>
            <ul style={{ padding: "0", overflow: "hidden", position: "relative", width: "1340px" }}>
              {trendingsid && trendingsid.map((element, index) => (
                <li
                  key={index}
                  className={`main ${isSpecial ? 'special' : '' }`}
                  style={{
                    position: "absolute",
                    left: `${(index - currentIndex) * 100}%`,
                    right:`${(index - currentIndex) * 100}`,
                    transition: "left 0.5s ease-in-out"
                  }}
                  
                >
                  <Link to="/detail" style={{ textDecoration: "none" }}>
                    <div style={{
                      width: "1340px",
                      height: "440px",
                      display: "flex",
                      alignItems: "center",
                      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url(${element.backdrop_path})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "none",
                      borderRadius: "15px"
                    }}>
                      <section style={{ padding: "0 70px", fontSize: "68px", width: "500px" }}>
                        <h1 style={{ fontSize: "64px", margin: "0", color: "white", display: "inline-block", lineHeight: "68px" }}>
                          <span>{element.original_title}</span>
                        </h1>
                        <div>
                          <button className='getdatailbtn'>Get Detail</button>
                        </div>
                      </section>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ alignSelf: 'center' }}>
            <button onClick={handleRightScroll}>R</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Trending.propTypes = {
  trendingsid: PropTypes.array,
};
