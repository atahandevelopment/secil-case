import "./styles/card.css";
import { SingleProductTypes } from "./types";

type Props = {
  data: SingleProductTypes;
};

const Card = (props: Props) => {
  const { data } = props;
  const { title } = data;

  const truncateTitle = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  };


  return (
    <div className="card-container">
        <div className="image-container">
          <img src={`${data?.image}`} />
        </div>
        <div className="movie-name-container">
            <label>{truncateTitle(title, 40)}</label>
            <label className="price">{data?.price ? `${data?.price + ' ' + '$'}` : ''}</label>
          </div>
    </div>
  );
};

export default Card;
