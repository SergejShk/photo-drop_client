import { useEffect } from "react";
import Terms from "./components/terms/Terms";

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.body.scrollIntoView({
      block: "start",
    });
  }, []);

  return <Terms />;
};

export default TermsPage;
