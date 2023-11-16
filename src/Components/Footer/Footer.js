import React from "react";
import { Footer } from "antd/es/layout/layout";
import { Row, Col, Input, Breadcrumb } from "antd";
import "./Footer.css";
import {
  FacebookFilled,
  GithubFilled,
  GoogleSquareFilled,
  InstagramFilled,
  InstagramOutlined,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
const FooterLayout = () => {
  return (
    <Footer className="footer">
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          align="middle"
          span={12}
          className="col1"
        >
          <div className="col1-container">
            <h2 className="col1-heading">
              Our platform is trusted by millions,& features an portfolio of
              financial product offerings.
            </h2>
            <a className="email-anchor" href="mailto:design4me@gmail.com">
              design4me@gmail.com
            </a>

            <a className="subscribe-anchor" href="#">
              Subscribe and get news
            </a>
            <Input className="email-input-field" placeholder="Email" />

            <ul className="redirect-links">
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Term of service</a>
              </li>
              <li>
                <a href="#">Language</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} span={12} className="col2">
          <div className="col2-container">
            <Breadcrumb className="breadcrumb-items">
              <Breadcrumb.Item className="breadcrumb-item">
                Marketplace
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item">
                Collections
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item">
                Sellers
              </Breadcrumb.Item>
              <Breadcrumb.Item className="breadcrumb-item">
                Blog
              </Breadcrumb.Item>
            </Breadcrumb>
            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <InstagramFilled
                    className="social-icon"
                    name="logo-instagram"
                  />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <LinkedinFilled
                    className="social-icon"
                    name="logo-linkedin"
                  />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <FacebookFilled
                    className="social-icon"
                    name="logo-facebook"
                  />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <TwitterSquareFilled
                    className="social-icon"
                    name="logo-twitter"
                  />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <GithubFilled className="social-icon" name="logo-gihub" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <GoogleSquareFilled
                    className="social-icon"
                    name="logo-google"
                  />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>&copy; 2022 Design4me</p>
            </div>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterLayout;
