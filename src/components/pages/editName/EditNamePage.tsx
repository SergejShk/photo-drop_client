import { useAppSelector } from "../../../hooks/reduxHooks";
import { getUserNameStore } from "../../../store/user/userSelectors";
import EditName from "./components/editName/EditName";

const EditNamePage: React.FC = () => {
  const curName = useAppSelector(getUserNameStore);

  return <EditName curName={curName} />;
};

export default EditNamePage;
