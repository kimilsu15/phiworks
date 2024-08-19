import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../resources/css/mainImage/mainImage.css"
function MainImage({nowTab}) {
  const [nowPage, setNowPage] = useState("");
  const navigation = useLocation().pathname;
  useEffect(() => {
    setNowPage(navigation);
  },[navigation])
  
  return <div className={nowPage === "/service" ? nowTab === "1" ? "itTab" : nowTab === "2" ? "manufacturingTab" :nowTab === "3" ? "circulationTab" : "mainImage" : nowPage === "/contact" ? "contact" : "mainImage"}></div>;
}
export default MainImage;
