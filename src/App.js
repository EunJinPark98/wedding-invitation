// src/App.js
import React, { useState } from "react";
import { BsClipboard } from "react-icons/bs";
import { Container, Card, Button, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [copied, setCopied] = useState("");

  // 신부측 계좌 정보 리스트
  const accounts = [
    {
      label: "🌸 신랑",
      name: "김선일",
      bankInfo: "토스뱅크 1000-1742-0122"
    },
    {
      label: "🌸 신부",
      name: "박은진",
      bankInfo: "토스뱅크 1001-4630-7887"
    }
  ];

  const handleCopy = (info) => {
    navigator.clipboard.writeText(info).then(() => {
      alert("복사되었습니다!");
    });
  };


  return (
    <Container>
      {/* 꽃잎 애니메이션 요소 */}
{[...Array(9)].map((_, i) => (
  <div key={i} className="petal"></div>
))}
      <Row>
        <Col className="text-center">
          <h1 className="main-h1 mt-4">We are getting married</h1>
          <p className="main-p">2025.06.22 (SUN) 11:00 AM</p>
        </Col>
      </Row>

      {/* 초대말씀 */}
      <Card className="p-3 mb-5 shadow-sm rounded-4 text-center">
        <Card.Body className="d-flex flex-column">
          <h5>초대장</h5>
          <Row>
            <Col>
              <p className="p2 mt-4">
                인생의 소중한 날,<br/>
                저희 두 사람의 새로운 시작을<br/>
                사랑하는 가족과 친지분들만 모시고<br/>
                작은 결혼식을 올리려 합니다.<br/>
                <br/>
                작지만 진심을 담은 자리,<br/>
                귀한 걸음으로 함께해 주시면<br/>감사하겠습니다.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

<Card className="p-3 mb-5 shadow-sm rounded-4 text-center">
  <h4 className="text-center mb-4">
    신부 <Image src="https://eunjinpark98.github.io/wedding-invitation/heart.png" className="deco2-icon" /> 신랑
  </h4>

  <div className="position-relative d-inline-block">
    <Image
      src="https://eunjinpark98.github.io/wedding-invitation/wedding10.jpg"
      className="profile-img"
      style={{
        width: '100%',
        maxWidth: '200px',
        height: 'auto',
        borderRadius: '2rem',
      }}
    />

    {/* 신부 이름 - 위에서 아래로 */}
    <motion.div
      initial={{ opacity: 0, y: -20 }} // 위쪽에서 시작
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        position: 'absolute',
        top: '50%',
        left: '0',
        transform: 'translateY(60%)',
        color: '#B0686F'
      }}
      className="name"
    >
      박은진
    </motion.div>

    {/* 신랑 이름 - 위에서 아래로, 살짝 지연 */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      style={{
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(60%)',
        color: '#627BAA'
      }}
      className="name"
    >
      김선일
    </motion.div>
  </div>
</Card>


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
          {["wedding12.jpg", "wedding11.jpg", "wedding4.jpg", "wedding6.jpg", "wedding8.jpg", "wedding7.jpg", "wedding2.jpg", "wedding3.jpg", "wedding1.jpg", "wedding9.jpg"].map((img, idx) => (
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
        <p className="mt-4 p4">
          2025. 06. 22 일요일 11시<br/>
          경기 용인시 수지구 성복2로 408 1층</p>
        <Button variant="outline-primary" href="https://map.naver.com/p/entry/place/2092199352?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0456143&lat=37.3227088&c=15.00,0,0,0,dh" target="_blank">
          지도 보기
        </Button>
      </Card>

      {/* 마음 전하실 곳곳 */}
       <Card className="p-3 mb-5 shadow-sm rounded-4 text-center">
      <Card.Body className="d-flex flex-column">
        <h5>마음 전하실 곳</h5>
        <Row>
          <Col>
            <p className="p5 mt-4 mb-5">
              가족과 가까운 친척분들만 모시고<br/>
              결혼식을을 올리게 되었습니다.<br/>
              소중한 분들 모두 모시고 인사드리지 못해<br/>
              아쉬운 마음이 크지만,<br/>
              따뜻한 응원과 축복에 깊이 감사드립니다.<br/><br/>
              그 마음에 보답할 수 있도록<br/>
              서로를 아끼고 존중하며 살아가겠습니다.<br/>
            </p>
            <Card className="shadow-sm rounded-4 text-center" style={{ backgroundColor: "#f9f2f3" }}>
                  <Card.Body>
                    {accounts.map((account, idx) => (
                      <div
                        key={idx}
                        className="my-4 p-3 rounded-4"
                        style={{
                          backgroundColor: "white",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
                        }}
                      >
                        <Row className="align-items-center justify-content-between mb-3 px-2">
                          <Col xs="auto" className="text-start">
                            <span style={{ fontWeight: "500" }}>
                              {account.label}&nbsp;<strong>{account.name}</strong>
                            </span>
                          </Col>
                          <Col xs="auto" className="text-end">
                            <span style={{ fontSize: "1.1rem" }}>{account.bankInfo}</span>
                          </Col>
                        </Row>

                        <Button
                          variant="light"
                          className="rounded-pill shadow-sm px-4 py-2 d-flex align-items-center mx-auto"
                          onClick={() => handleCopy(account.bankInfo)}
                          style={{ border: "1px solid #ddd" }}
                        >
                          <BsClipboard className="me-2" /> 계좌번호 복사
                        </Button>
                      </div>
                    ))}
                  </Card.Body>
            </Card>

          </Col>
        </Row>
      </Card.Body>
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
