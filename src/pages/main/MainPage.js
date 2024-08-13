import { useState } from "react";
import "../../resources/css/main/mainPage.css"
import { Link } from "react-router-dom";
function MainPage() {
  const division = [
    {
      name: "IT 사업부문",
      url: "/service?tab=1"
    },
    {
      name: "제조·판매 부문",
      url: "/service?tab=2"
    },
    {
      name: "유통 사업부문",
      url: "/service?tab=3"
    },
  ];
  return (
    <div className="main">
      <div className="main_container">
        <div className="textArea">
          <div className="title">WELCOME TO <span>PHI WORKS</span> WEB SITE.</div>
          <div className="description">㈜파이웍스는 'Global Power Leader'라는 新 기업경영 기치 아래 AI 기반 IT 사업부문과 제조·판매 부문,<br/> B2B 기반 유통 사업부문 등 핵심 사업부문에서 차별화되고
             세련된 서비스를 제공하고 있는 기업입니다.
          </div>
          <div className="description">또한, 올바른 기업윤리경영 정립과 투명성 제고 및 고객, 협력업체 등 사업 주체들간의 공동이익을 추구하고,<br/>
           기업의 사회적 책임을 성실히 수행하고 있으며, 중장기 핵심전략 발굴 및 창의적 Vision 아래 최고의<br/> 기업으로 자리매김 하기 위해 노력하고 있습니다.
          </div>
        </div>
        <div className="subTitle">
          <span>사업 부문</span>
        </div>
        <div className="wrapDivision">
        {
          division.map((item, index) => {
            return (
            <div className="division" key={index}>
              <div>{item.name}</div>
              <Link to={item.url}>
                <div className="moreBtn">MORE</div>
              </Link>
            </div>
            )
          })
        }
        </div>
      </div>
    </div>
  );
}

export default MainPage;
