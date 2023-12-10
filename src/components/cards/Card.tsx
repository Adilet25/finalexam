import "../../styles/Card.scss";
import { useNavigate } from "react-router-dom";

const Card = (item: any) => {
  //   const [like, setLike] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <div className="cardBlock">
        <div className="firstInfo">
          <p className="infoTitle">{item.item.title}</p>
          <p>{item.item.company}</p>
          <p>{item.item.graph}</p>
        </div>
        <div className="secondInfo">
          <p
            className="infoBtn"
            onClick={() => navigate(`/details/${item.item.key}`)}>
            Узнать больше
          </p>
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
