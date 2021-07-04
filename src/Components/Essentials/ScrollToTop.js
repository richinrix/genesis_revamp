import { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  const refresh = () => {};
  return <Redirect to="/" />;
}
export default withRouter(ScrollToTop);
