import "../../resources/css/contact/contactPage.css"
import KakaoMap from "../../component/map/KakaoMap"
function ContactPage() {
  return (
    <div className="contactPage">
      <div className="container">
        <div className="wrapContents">
          <div className="textArea">
            <div className="contactTitle mb-25">Our team is here to answer any questions you may have.
            Please reach out to us and we will respond as soon as we can.</div>
            <div className="title">Our Location</div>
            <div className="text mb-25">
            경기도 안양시 만안구 전파로 44번길 57, 801호
            (두산명학 아너비즈타워)
            </div>
            <div className="title">Subway</div>
            <div className="text mb-25">1호선 명학역 2번 출구</div>
            <div className="title">Contact Info</div>
            <div className="text">
              <ul>
                <li>Tel: +82-(0)31-8091-0311</li>
                <li>Fax: +82-(0)31-8091-0312</li>
                <li>Email: phiworks@phiworks.co.kr</li>
              </ul>
            </div>
          </div>
          <div className="mapArea">
            <KakaoMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
