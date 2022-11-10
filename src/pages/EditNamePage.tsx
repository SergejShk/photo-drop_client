import EditName from "../components/editName/EditName";
import { useAppSelector } from "../hooks/reduxHooks";
import { getUserNameStore } from "../redux/user/userSelectors";

const EditNamePage: React.FC = () => {
const curName = useAppSelector(getUserNameStore)

  return <EditName curName={curName} />;
};

export default EditNamePage;
