import React, { useEffect } from "react";
import { saveToken } from "../api/authApi";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getMustCurUser, getTokenStore } from "../store/auth/authSelectors";
import { getUserDataThunk } from "../store/user/userOperations";
import Routes from "./routes/Routes";

const App: React.FC = () => {
  const token = useAppSelector(getTokenStore);
  const isMustCurUser = useAppSelector(getMustCurUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    isMustCurUser && dispatch(getUserDataThunk());
  }, [dispatch, isMustCurUser]);

  useEffect(() => {
    saveToken.set(token);
  }, [token]);
  return <Routes />;
};

export default App;
