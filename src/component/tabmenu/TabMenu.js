import React, { useEffect } from "react";
import "../../resources/css/tabmenu/tabMenu.css";
function TabMenu({tabTitle, nowTab, setNowTab, navigation, tabParam}) {
  
  useEffect(() => {
    if(tabParam){
      setNowTab(tabParam);
    }else if(!tabParam){
      setNowTab("1");
    }
  },[navigation])
  return (
    <div className="tabMenu">
      <div className="container">
        <div className="tabTitle">
          {tabTitle.map((item, index) => {
            return <div className={nowTab === item.id ? "tabItem active" : "tabItem"} key={index} onClick={() => setNowTab(item.id)} >{item.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
export default TabMenu;
