import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../resources/css/mainImage/mainImage.css"

function MainImageText({text}){
  return(
    <div className="imageText">
      <div className="title">{text?.title}</div>
      {
        text?.description &&
        <div className="description">{text.description}</div>
      }
    </div>
  )
}

function MainImage({nowTab}) {
  const [nowPage, setNowPage] = useState("");
  const navigation = useLocation().pathname;
  const [nowText, setNowText] = useState({});
  const textData = {
    mainPage : {
      title : "The name that can be \nPHI WORKS"
    },
    business : {
      title : "Innovative Technology, Reliable Service",
      description : "끊임없는 혁신 기술로 고객의 성장과 함께하는 IT 서비스 파트너, PHI WORKS"
    },
    manufacturing : {
      title : "Sustainable Products for a Cleaner Future",
      description : "지속 가능하고 친환경적인 제품 개발을 위한 연구와 혁신을 추구합니다."
    },
    circulation : {
      title : "Tools You Trust, Your Partner in Every Work",
      description : "성공적인 작업의 시작, 신뢰할 수 있는 작업기계와 공구를 공급합니다."
    },
    contact : {
      title : "We’re Ready to Help, Get in Touch!",
      description : "우리는 이 자리에 있고, 함께 할 준비가 되어 있습니다."
    }
  }

  useEffect(()=>{
    if(nowPage === "/"){
      setNowText(textData.mainPage);
    }else if(nowPage === "/service" && nowTab === "1"){
      setNowText(textData.business);
    }else if(nowPage === "/service" && nowTab === "2"){
      setNowText(textData.manufacturing);
    }else if(nowPage === "/service" && nowTab === "3"){
      setNowText(textData.circulation);
    }else if(nowPage === "/contact"){
      setNowText(textData.contact);
    }
  },[nowPage, nowTab])


  useEffect(() => {
    setNowPage(navigation);
  },[navigation])
  
  return <div className={nowPage === "/service" ? nowTab === "1" ? "itTab" : nowTab === "2" ? "manufacturingTab" :nowTab === "3" ? "circulationTab" : "mainImage" : nowPage === "/contact" ? "contact" : "mainImage"}>
    <MainImageText text={nowText}/>
  </div>;
}
export default MainImage;
