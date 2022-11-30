import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { getAlbumsStore } from "../../../store/albums/albumsSelectors";
import PaymentSuccess from "./components/paymentSuccess/PaymentSuccess";

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  const [albumId] = useState<string>(() =>
    JSON.parse(localStorage.getItem("albumId") ?? "")
  );
  const albums = useAppSelector(getAlbumsStore);
  const [album] = useState(() =>
    albums.find((album: any) => album.id === albumId)
  );

  useEffect(() => {
    return () => {
      localStorage.setItem("albumId", JSON.stringify(""));
    };
  }, []);

  useEffect(() => {
    !albumId && navigate("/");
  }, [albumId, navigate]);

  return (
    <>
      {albumId ? (
        <PaymentSuccess
          location={album.location}
          cover={album.cover}
          albumId={albumId}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default PaymentSuccessPage;
