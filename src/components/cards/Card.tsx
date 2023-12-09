import React, { useState } from "react";
import heart from "../../assets/heart.svg";
import heart2 from "../../assets/Vector (20).svg";
import "../../styles/Card.scss";
type Props = {};

const Card = (item: any) => {
  //   const [like, setLike] = useState(true);

  return (
    <>
      <div className="cardBlock">
        <div className="firstInfo">
          <p className="infoTitle">{item.item.title}</p>
          <p>{item.item.company}</p>
          <p>{item.item.graph}</p>
        </div>
        <div className="secondInfo">
          <p className="infoBtn">Узнать больше</p>
          <p>{item.item.time}</p>
          {/* {like ? (
            <img
            src={heart2}
            alt="error"
            onClick={() => {
                setLike(!like);
            }}
            className="likeBtn"
            />
            ) : (
                <img
                src={heart}
                alt="error"
                onClick={() => {
                    setLike(!like);
                }}
                className="likeBtn"
                />
            )} */}
        </div>
      </div>
    </>
  );
};

export default Card;
