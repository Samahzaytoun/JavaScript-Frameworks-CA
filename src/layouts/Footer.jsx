import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr />
        <Row>
          <Col lg={12} md={12} sm={12}>
            <p className="text-center">© 2023 My Ecommerce Site. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
