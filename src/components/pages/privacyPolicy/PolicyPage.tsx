import { useEffect } from "react";
import Policy from "./components/policy/Policy";

const PolicyPage: React.FC = () => {
  useEffect(() => {
    document.body.scrollIntoView({
      block: "start",
    });
  }, []);

  return <Policy />;
};

export default PolicyPage;
