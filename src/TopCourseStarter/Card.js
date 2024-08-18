import React from "react";
import { FcLike } from "react-icons/fc";
import './Styli.css';

const Card = ({ Course }) => {
  return (
    <div>
      <div>
        <img className="Imageofproject"src={Course.image.url} alt="image_not_found" />
      </div>
      <div>
        <button>
          <FcLike fontSize="1.75rem" />
        </button>
      </div>
      <div>
        <p className="Descri">{Course.description}</p>
        <p>{Course.title}</p>
      </div>
    </div>
  )
}

export default Card;
