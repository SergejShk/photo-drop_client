import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {
  ImgAlbum,
  TextReceive,
  TextSuccess,
  TitleText,
  WrapperPaySuccess,
} from "./PaymentSuccess.style";

interface IProps {
  location: string;
  cover: string;
  albumId: string;
}

const PaymentSuccess: React.FC<IProps> = ({ location, cover, albumId }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <WrapperPaySuccess>
      <TitleText>Thank you!</TitleText>

      <TextSuccess>
        The album <b>{location}</b> is now unlocked.
      </TextSuccess>
      <TextSuccess className="textLastChild">
        You can now download, share, post, and print your hi-res,
        watermark-free, glorious memories.
      </TextSuccess>

      <ImgAlbum src={cover} alt="cover of album" />

      <Link to={`/album/${albumId}`} className="linkToDashboard">
        See photos
      </Link>

      {isDesktop && (
        <TextReceive>
          You will receive an email with your order details.
        </TextReceive>
      )}
    </WrapperPaySuccess>
  );
};

export default PaymentSuccess;
