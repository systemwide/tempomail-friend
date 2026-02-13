import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CanonicalTag = () => {
  const location = useLocation();

  useEffect(() => {
    const canonical = document.querySelector("link[rel='canonical']");
    const url = `https://tenminuteemails.com${location.pathname === "/" ? "/" : location.pathname}`;
    
    if (canonical) {
      canonical.setAttribute("href", url);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", url);
      document.head.appendChild(link);
    }
  }, [location.pathname]);

  return null;
};

export default CanonicalTag;
