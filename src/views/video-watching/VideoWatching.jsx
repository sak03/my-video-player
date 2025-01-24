import React from 'react'
import ReactPlayer from 'react-player'
import { HomeVideoList } from '../home/homeDataList'
import { useNavigate } from 'react-router-dom';
import { recomendedVideoList } from '../recomended/recomendedVideos'

const VideoWatching = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const videoId = queryParams.get('id');
  const allVideoList = [...HomeVideoList, ...recomendedVideoList];
  const filterVideo = allVideoList?.filter((item) => {
    return item?.id === videoId
  })
  const videoPoster = (data) => {
    const videoId = data?.split('?v=')[1];
    const imgUrl = `http://img.youtube.com/vi/${videoId}/0.jpg`;
    return imgUrl
  }

  // console.log('allVideoList', allVideoList)

  return (
    <div className='row'>
      <div className='col-lg-9 col-9'>
        <div className='mt-3'>
          <ReactPlayer
            controls
            playing={true}
            url={filterVideo[0]?.url}
            className='w-100'
            width={"100%"}
            height={"440px"}
          />
        </div>
        <div>{filterVideo[0]?.name}</div>
        <div className='mt-3'>
          <p className='my-0'><b>Discription</b></p>
          <small>The sample video might have a few missing details. Use it as a reference, but do not limit your creativity
            or restrict your design ideas to {`what’s`} shown in the sample. Feel free to enhance, improve, and include
            additional features or better design elements.</small>
        </div>
      </div>
      <div className='col-lg-3 video-list'>
        <div className='row py-1 px-2'>
          {allVideoList?.map((item, idx) => {
            const url = `/video-watching?id=${item.id}`
            return (
              <div
                className='col-sm-12 col-md-12 col-lg-12 mt-3'
                key={idx}
                onClick={() => {
                  navigate(url);
                  window.scrollTo(0, 0);
                }}
              >
                <div className='card pointer'>
                  <img src={videoPoster(item?.url)} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoWatching