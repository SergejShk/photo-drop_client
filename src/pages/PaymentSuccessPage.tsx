import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentSuccess from "../components/paymentSuccess/PaymentSuccess";

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const [location] = useState<string>(
    () =>
      //@ts-ignore
      JSON.parse(localStorage.getItem("location")) || ""
  );
  const [cover] = useState<string>(
    () =>
      //@ts-ignore
      JSON.parse(localStorage.getItem("cover")) || ""
  );

  useEffect(() => {
    return () => {
      localStorage.setItem("location", JSON.stringify(""));
      localStorage.setItem("cover", JSON.stringify(""));
    };
  });

  useEffect(() => {
    !location && !cover && navigate("/");
  }, [cover, location, navigate]);

  return <PaymentSuccess location={location} cover={cover} />;
};

export default PaymentSuccessPage;
