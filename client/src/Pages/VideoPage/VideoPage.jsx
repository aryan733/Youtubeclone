import React, { useEffect } from 'react';
import moment from 'moment';
// import vid from '../../components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../components/Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/Video';

function VideoPage() {
  const {vid}=useParams();
  // console.log(vid)
  // const channels=useSelector(state=>state?.channelReducers)
  // const currentChannel=channels.filter(c=>c._id=== vid)[0];

  const vids=useSelector(state=>state.videoReducer);
  const dispatch=useDispatch()

  // console.log(vids)
  const vv=vids?.data.filter(q=> q._id=== vid)[0];
  const CurrentUser=useSelector((state)=>state?.currentUserReducer);

const handleHistory=()=>{
    dispatch(
      addToHistory(
        {
          videoId:vid,
          Viewer:CurrentUser?.result._id,
        }
      )
    )
}
const handleViews=()=>{
  dispatch(viewVideo({
    id:vid
  }))
}
  useEffect(()=>{
    if (CurrentUser) {
       handleHistory();
    }
    handleViews();
  }, []);
  return (
   <>
    <div className='container_VideoPage'>
    <div className='container2_VideoPage'>
        <div className='video_display_screen_VideoPage'>
          <video 
          
           //src={`http://localhost:5500/${vv.filepath}`}
          src={`https://youtubeclone-21.onrender.com/${vv.filepath}`}
        
           
           className={'video_ShowVideo_VideoPage'}
           controls
           //  autoPlay
           ></video>
          <div className="video_details_VideoPage">
            <div className="video_btns_title_VideoPage_cont">
              <p className='video_title_videoPage'>{vv?.videoTitle}</p>
              <div className='views_date_btns_VideoPage'>
                <div className='views_VideoPage'>
                {vv?.Views} views <div className='dot'></div>{moment(vv?.createdAt).fromNow()}
               </div>
            <LikeWatchLaterSaveBtns vv={vv} vid={vid}/>
               </div>
           </div>
           <Link to={`/channel/${vv?.videoChannel}`} className='Channel_details_VideoPage'>
            <b className='Channel_logo_VideoPage'>
              <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
            </b>
            <p className='Channel_name_Videopage'> {vv?.Uploader}</p>
           </Link>
           <div className='comments_VideoPage'>
            <h2>
              <u>comments</u>
            </h2>
             <Comments  videoId={vv._id}/>
           </div>
          </div>
        </div>
        <div className='moreVideoBar'>
          More Videos
        </div>
    </div>
    </div>
    
    
   </>
  )
};
export default VideoPage