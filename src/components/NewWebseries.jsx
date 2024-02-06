import PropsType from 'prop-types'
import './Style.css'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useState } from 'react';
import { set } from 'lodash';

function NewWebseries({WebseriesData}) {
    const [btnvisible,setbtnvisible] = useState(false);
    const [crntindex,setcrntindex] = useState(0);
    const [slideindex,setslideindex] = useState()
    const [play,setpaly] = useState();
    // const [videovisble,setvideovisble] = useState(false)
    
    function ws_showbtn(){
      setbtnvisible(true);
    }

    function ws_hidebtn(){
        setbtnvisible(false)
    }

    function ws_Lsrcoll(){
     
    }

    function ws_Rscroll(){
        // ulele.scrollHeight + 413;    
        // let newindex = (crntindex + 5) % WebseriesData.length;
        // setcrntindex(newindex);
        // console.log(WebseriesData.length)
        
    }
  
    function handlehover(index){
        setslideindex(index);
      
    }

    function leavehover(){
        setslideindex(false);
    }

    function startvideo(e){
       setpaly(true);
       console.log(e);
    }

  return (
    <div className='webseris_wrp'>
        <div className='web_inerwpr'>
            <div className='web_heading'>
                <div style={{padding:"0 34px",textAlign:"left"}}>
                    <h2 style={{margin:"15px 0"}}>
                        <span style={{color:"#1a98ff"}}>Dailyflex </span>
                        <span>new web series</span>
                    </h2>
                </div>
            </div>

            <div className='web_listwrp'>

                <div className='inerlist_wrp' onMouseOver={ws_showbtn} onMouseOut={ws_hidebtn}>

                {btnvisible && 
                <div className='ws_Lbtn' onClick={ws_Lsrcoll} style={{display:"block", fontSize:"17px"}} >
                <MdKeyboardArrowLeft />       
                </div>}

                    <div className='inerscrollwrp'>
                        <div className="seriesul" id="ul">
                           
                           {WebseriesData  && WebseriesData.map((val,index)=>(

                            <div className={`list_item ${slideindex === index ? "widthincrea" : ""}`} key={index} onMouseEnter={()=> handlehover(index)} onMouseLeave={leavehover}>
                           
                               <img src={`${val.poster_path}`} alt="" className={`web_s_poster ${slideindex === index ? "setimgwidth" : ""}`} style={{}}/>
                               
                            
                                 <video   poster={`${val.seasons[0].backdrop_path}`}  className={`ws_backvideo${slideindex === index ? "showvideo" :""}`} id="videoele" style={{width:"691px", height:"404px",objectFit:"cover",objectPosition:'center', aspectRatio:"16/8"}}>
                                <source src={`${val.video}`} type="video/mp4"></source>
                               </video>
                               
                                
                            </div>

                           ))}

                        </div>
                    </div>
                   
                   {btnvisible && 
                    <div className='ws_Rbtn'  onClick={ws_Rscroll} style={{display:"block", fontSize:"17px"}}>
                    {/* <button >Right</button>         */}
                    <MdKeyboardArrowRight />   
                    </div>
                   }

                </div>
            </div>
        </div>
    </div>
  )
}

export default NewWebseries;

NewWebseries.propsType = {
    WebseriesData: PropsType.array,
};