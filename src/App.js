// src/App.js
import React, { useState } from "react";
import { Container, Card, Button, Row, Col, Image, Carousel, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  const [showGroomModal, setShowGroomModal] = useState(false);

  const handleGroomModalOpen = () => setShowGroomModal(true);
  const handleGroomModalClose = () => setShowGroomModal(false);

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
            귀한 걸음으로 함께해 주시면<br/>감사하겠습니다.
          </p>
        </Card.Body>
      </Card>

      {/* 신랑신부 소개 */}
      <Card className="p-3 mb-5 shadow-sm rounded-4">
        <h4 className="text-center mb-4">신랑 <Image src="https://eunjinpark98.github.io/wedding-invitation/heart.png" className="deco2-icon"/> 신부</h4>
        <Row>
          <Col xs={6} className="text-center" onClick={handleGroomModalOpen} style={{ cursor: "pointer" }}>
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



      <Modal show={showGroomModal} onHide={handleGroomModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>신랑 <span className="double-strike">자랑</span> 소개</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center modal-intro">
          <Image src="https://eunjinpark98.github.io/wedding-invitation/suniry.jpg" className="profile-img2 mb-3" />
          <p className="p3"><strong>제 남편 김선일은요!</strong></p>
          <p>항상 아침 일찍 먼저 일어나서 출근 준비를 하고<br/>아직 자고있는 저를 깨우러옵니다.<br/> 
             더 잘꺼라고 눈도 못뜨는 저를 달래며<br/>일어날때까지 다리를 주물러주고<br/>
             제가 일어나서 출근준비를 할때는<br/>회사에 가져갈 점심 도시락을 싸줍니다<br/><br/>
             집안일도 잘하고 늘 표현해주고<br/>먹고 싶은게 있으면 바로 나가서 사다주고<br/>
             저를 아기공주님처럼 대해주는<br/>세상 천사같은 남편입니다!<br/></p>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;
