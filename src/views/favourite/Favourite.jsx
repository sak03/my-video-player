import React from 'react'
import { favouriteVideoList } from './favouriteVideoList';
import { useNavigate } from 'react-router-dom';

const Favourite = () => {
  const navigate = useNavigate()
  const videoPoster = (data) => {
    const videoId = data?.split('?v=')[1];
    const imgUrl = `http://img.youtube.com/vi/${videoId}/0.jpg`;
    return imgUrl
  }
  return (
    <div className='row p-2'>
      {favouriteVideoList?.map((item, idx) => {
        const url = `/video-watching?id=${item.id}`
        return (
          <div
            className='col-sm-12 col-md-6 col-lg-4 mt-2'
            key={idx}
            onClick={() => navigate(url)}
          >
            <div className='card pointer'>
              <img src={videoPoster(item?.url)} alt={item.name} />
              <p>{item.name}</p>
            </div>
          </div>
        )
      })}
    </div>)
}

export default Favourite