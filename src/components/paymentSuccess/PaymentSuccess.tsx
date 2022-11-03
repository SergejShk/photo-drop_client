import { Link } from "react-router-dom";
import {
  TextSuccess,
  TitleText,
  WrapperPaySuccess,
} from "./PaymentSuccess.style";

const PaymentSuccess = () => {
  return (
    <WrapperPaySuccess>
      <TitleText>Thank you!</TitleText>

      <TextSuccess>The album is now unlocked.</TextSuccess>
      <TextSuccess className="textLastChild">
        You can now download, share, post, and print your hi-res,
        watermark-free, glorious memories.
      </TextSuccess>

      <Link to="/dashboard" className="linkToDashboard">
        See photos
      </Link>
    </WrapperPaySuccess>
  );
};

export default PaymentSuccess;
