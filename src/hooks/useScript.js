import { useEffect } from "react";

const useScript = function (file) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = file;
    script.type = "type/javascript";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
  }, [file]);
};
export default useScript;
