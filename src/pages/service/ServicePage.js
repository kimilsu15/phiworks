import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TabMenu from "../../component/tabmenu/TabMenu";
import serviceData from "../../resources/serviceData/serviceData.json"
import "../../resources/css/service/servicePage.css";
function TabContents({tabContentsData}) {
  return(
    <>
      {
      tabContentsData&&  
      tabContentsData?.map((item, index) => {
        return(
          <>
            <div className="wrapTabContents" key={index}>
              <div className="wrapContentsText">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
                <ul>
                  {
                    item.ul.map((value,number) =>{
                      return <li key={number}>{value}</li>
                    })
                  }
                </ul>
                <div className="reference">
                  <div className="referenceBtn">Reference</div>
                  <div className="wrapReferenceText">
                    {
                      item.reference.map((vv,ii)=>{
                        return(
                          <div className="referenceText" key={ii}>{vv}</div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="wrapContentsImage" style={{backgroundImage:`url(${item.image})`}}>
                {/* <img src={item.image}/> */}
              </div>
            </div>
          </>
        )
      })
    }
    </>
  )
}
function ServicePage({nowTab, setNowTab}) {
  const tabTitle = [
    {
      id : "1",
      name: "IT 사업부문",
    },
    {
      id : "2",
      name: "제조·판매 부문",
    },
    {
      id : "3",
      name: "유통 사업부문",
    }
  ];
  // const [nowTab, setNowTab] = useState("");
  const navigation = useLocation();
  const tabParam = navigation?.search?.split("=")?.[1];
  const [tabContentsData, setTabContentsData] = useState();
  useEffect(()=>{
    if(nowTab === "1"){
      setTabContentsData(serviceData.business);
    }else if(nowTab === "2"){
      setTabContentsData(serviceData.manufacturing);
    }else if(nowTab === "3"){
      setTabContentsData(serviceData.circulation);
    }
  },[nowTab])
  
  return <div className="service">
    <TabMenu tabTitle={tabTitle} nowTab={nowTab} setNowTab={setNowTab} navigation={navigation} tabParam={tabParam}/>
    <div className="service_container">
      <TabContents tabContentsData={tabContentsData}/>
    </div>
  </div>;
}

export default ServicePage;
