import { Map, MapMarker } from "react-kakao-maps-sdk";
export default function KakaoMap() {
    return(
    <Map
      center={{ lat: 37.3879056577617, lng: 126.93846086147937 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 37.3879056577617, lng: 126.93846086147937 }}>
      </MapMarker>
    </Map>
    )
}