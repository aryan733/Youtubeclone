import React from 'react'
import './WatchedLikedVideo.css'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
// import vid from '../../components/Video/vid.mp4'
import { FaRegPlayCircle} from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'
function WatchedLikedVideo() {
  const CurrentUser=useSelector((state)=>state?.currentUserReducer);
  const historyList=useSelector(state=>state.HistoryReducer)
  const  LikedVideoList = useSelector((state)=>state.likedVideoReducer)
  return (
    <div className='container_Pages_App'>
      <LeftSidebar/>
      <div className='container2_Pages_App'>
          <div className='container_WatchedLikedVideo'>
              <h1 className='title_container_WatchedLikedVideo'>
                <b>
                  <FaRegPlayCircle/>
                </b>
                <b>watched Videos</b>
              </h1>
              <div className='container_videoList_WatchedLikedVideo'>
                <WHLVideoList 
                page={"History"}
                CurrentUser={CurrentUser?.result._id}
                videoList={historyList}
                />
               
              </div>
            </div>
          <div className='container_WatchedLikedVideo'>
              <h1 className='title_container_WatchedLikedVideo'>
                <b>
                  <AiOutlineLike/>
                </b>
                <b>Liked videos</b>
              </h1>
              <div className='container_videoList_WatchedLikedVideo'>
                <WHLVideoList 
                page={"Liked videos"}
                CurrentUser={CurrentUser?.result._id}
                videoList={LikedVideoList}
                />
               
              </div>
            </div>

       </div>
     </div>
  )
}

export default WatchedLikedVideo