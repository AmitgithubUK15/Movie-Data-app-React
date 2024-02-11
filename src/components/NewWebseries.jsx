import { useEffect, useRef, useState } from 'react';
import PropsType from 'prop-types';
import './Style.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';

function NewWebseries({ WebseriesData }) {
  const [btnVisible, setBtnVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(null);
  const userscroll = useRef(null);
  const [scrollefts,setscrollleft] = useState(0)
  
  const videoRefs = useRef([]);

  const startVideo = (index) => {
    setSlideIndex(index);
    setBtnVisible(true);
    
    const video = videoRefs.current[index];
    if (video && video.paused) {
      video.play();
    }
  };

  const stopVideo = (index) => {
    setSlideIndex(null);
    setBtnVisible(false);

    const video = videoRefs.current[index];
    if (video && !video.paused) {
      video.pause();
    }
  };

  const handleMouseEnter = (index) => {
    startVideo(index);
  };

  const handleMouseLeave = (index) => {
    stopVideo(index);
  };

  const handleLeftScroll = () => {
    if(userscroll.current.scrollLeft !== 7360){
      if(userscroll.current){
         userscroll.current.scrollLeft = userscroll.current.scrollLeft -1472;
        
      }
      
    }
    else{
     if(userscroll.current){
     userscroll.current.scrollLeft = userscroll.current.scrollLeft + 7360;
    }
   }
  };

  const handleRightScroll = () => {
  
   if(userscroll.current.scrollLeft !== 8832){
     if(userscroll.current){
        userscroll.current.scrollLeft = userscroll.current.scrollLeft +1472;
        console.log(userscroll)
     }
     
   }
   else{
    if(userscroll.current){
    userscroll.current.scrollLeft = userscroll.current.scrollLeft - 8832;
   }
  }
   
  };


  function scrollefth(){
    if(userscroll.current){
      const newpos = userscroll.current.scrollLeft;
      setscrollleft(newpos);
      console.log(scrollefts)
  
    }
    
  }

  
 

  return (
    <div className='webseris_wrp'>
      <div className='web_inerwpr'>
       

        <div className='web_listwrp'>
          <div className='inerlist_wrp'  onMouseOver={() => setBtnVisible(true)} onMouseOut={() => setBtnVisible(false)}>
            {btnVisible && <div className='ws_Lbtn' onClick={handleLeftScroll} style={{ display: "block", fontSize: "27px" }}>
              <MdKeyboardArrowLeft />
            </div>}
            <div className='inerscrollwrp'  style={{transition:"0.5s ease-in-out"}} ref={userscroll} onScroll={scrollefth}>
              <div className="seriesul" id="ul" >
                {WebseriesData && WebseriesData.map((val, index) => (
                  <div key={index} className={`list_item ${slideIndex === index ? "widthincrea" : ""}`} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                    <img src={val.poster_path} alt="" className={`web_s_poster ${slideIndex === index ? "setimgwidth" : ""}`} />
                  
                    <video ref={ref => videoRefs.current[index] = ref} className={`ws_backvideo${slideIndex === index ? "showvideo" : ""}`} style={{ width: "739px", height: "404px", objectFit: "cover",objectPosition:"center", aspectRatio: "16/9" }}>
                      <source src={val.video} type="video/mp4"></source>
                    </video>

                    <div className={`detailbtn ${slideIndex === index ? "shdetalsec": ""}`}>
                        <div className='btninnerdiv'>
                            <div className='seriesnm'>
                                <h1 style={{margin:"24px 0", fontSize:"57px",textShadow: "-6px 1px 6px BLACK",lineHeight:"59px"}}>
                                    <span>{val.original_title}</span>
                                </h1>
                            </div>
                            <div className='btnseciton'>
                                <Link to={
                                  `/seriesdetail/${encodeURIComponent(val._id)}
                                  /${encodeURIComponent(val.original_title)}
                                  /${encodeURIComponent(val.genres)}
                                  /${encodeURIComponent(val.contentType)}
                                  /${encodeURIComponent(val.trailer)}`} 
                                  style={{display:"inline-block"}} >

                                    <button style={{cursor:"pointer"}}>Get Deatils</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {btnVisible && <div className='ws_Rbtn'  onClick={handleRightScroll} style={{ display: "block", fontSize: "27px" }}>
              <MdKeyboardArrowRight />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

NewWebseries.propTypes = {
  WebseriesData: PropsType.array,
};

export default NewWebseries;
