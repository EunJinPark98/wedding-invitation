// src/App.js
import React from "react";
import { Container, Card, Button, Row, Col, Image, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container>
      {/* 꽃잎 애니메이션 요소 */}
{[...Array(9)].map((_, i) => (
  <div key={i} className="petal"></div>
))}
      {/* 웨딩사진 배경 메인 박스 */}
      <Card className="main-hero-card text-center mb-5"
      style={{ backgroundImage: "url('/noImage.jpg')"}}>
        <Card.Body className="d-flex flex-column">
          <h1 className="mt-3">We are getting married</h1>
          <p>2025.06.22 (SUN) 11:00 AM</p>
        </Card.Body>
      </Card>

      {/* 초대말씀 */}
      <Card className="p-3 mb-5 shadow-sm rounded-4 text-center">
        <Card.Body className="d-flex flex-column">
          <h5 className="mb-4">초대장</h5>
          <p className="p2">
            인생의 소중한 날,<br/>
            저희 두 사람의 새로운 시작을<br/>
            사랑하는 가족과 친지분들만 모시고<br/>
            결혼식을 올리려 합니다.<br/>
            <br/>
            작지만 진심을 담은 자리,<br/>
            귀한 걸음으로 함께해 주시면 감사하겠습니다.
          </p>
        </Card.Body>
      </Card>

      {/* 신랑신부 소개 */}
      <Card className="p-3 mb-5 shadow-sm rounded-4">
        <h4 className="text-center mb-4">신랑 <Image src="https://eunjinpark98.github.io/wedding-invitation/heart.png" className="deco2-icon"/> 신부</h4>
        <Row>
          <Col xs={6} className="text-center">
            <Image src="" className="profile-img" />
            <p className="mt-2"><strong>김선일</strong></p>
          </Col>
          <Col xs={6} className="text-center">
            <Image src="" className="profile-img" />
            <p className="mt-2"><strong>박은진</strong></p>
          </Col>
        </Row>
      </Card>

      {/* 투명 배경 인사말 */}
      <div className="transparent-message text-center mt-5 mb-4">
        <Image src="https://eunjinpark98.github.io/wedding-invitation/deco1.png" className="deco1-icon"/>
        <p className="p1">
          평범한 두 사람이 만나<br />
          서로의 하루를 재미있고 특별하게 만들어 가고 있습니다.
        </p>
      </div>

      {/* 우리 이야기 - 그리드 사진 갤러리 */}
      <Card className="p-3 mb-5 shadow-sm rounded-4">
        <h4 className="text-center mb-3"></h4>
        <Row className="g-3">
          {["noImage.jpg", "noImage.jpg", "noImage.jpg", "noImage.jpg", "noImage.jpg", "noImage.jpg", "noImage.jpg", "noImage.jpg"].map((img, idx) => (
            <Col xs={6} md={4} key={idx}>
              <img
                src={`https://eunjinpark98.github.io/wedding-invitation/${img}`}
                alt={`사진${idx + 1}`}
                className="gallery-img"
              />
            </Col>
          ))}
        </Row>
      </Card>


      {/* 장소 안내 */}
      <Card className="text-center p-3 shadow-sm rounded-4 mb-5">
        <h5>오시는 길</h5>
        <Image src="https://eunjinpark98.github.io/wedding-invitation/weddingHall.jpg" className="weddingHall-img"/>
        <p className="mt-4">
          2025. 06. 22 일요일 11시<br/>
          경기 용인시 수지구 성복2로 408 1층</p>
        <Button variant="outline-primary" href="https://map.naver.com/p/entry/place/2092199352?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0456143&lat=37.3227088&c=15.00,0,0,0,dh" target="_blank">
          지도 보기
        </Button>
      </Card>

      {/* footer 느낌 인사말 */}
      <footer className="footer-message text-center p-4">
        <p className="pt-5">
          이제는 서로를 아끼고 사랑하는 마음으로<br />
          부부로써 함께하려 합니다.
        </p>
        <p className="text-muted">저희의 시작을 축복해 주세요.</p>
      </footer>
    </Container>
  );
}

export default App;
