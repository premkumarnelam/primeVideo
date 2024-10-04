// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div className="movie-item-container">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
          </div>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="20" />.
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} width="100%" controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
