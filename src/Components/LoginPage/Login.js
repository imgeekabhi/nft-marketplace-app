import React from "react";
import { Col, Flex, Layout, Row } from "antd";
import "./Login.css";
import Barcode from "../../Images/Barcode.png";
import { Typography } from "antd";
import { Form, Input, Button } from "antd";
import { AppleFilled, GoogleOutlined } from "@ant-design/icons";
const { Text } = Typography;
const { Content } = Layout;
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Content className="content-container">
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} align="middle" span={12}>
          <div style={{ width: "458px" }}>
            <h2 className="login-heading">Log in</h2>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input className="login-username" placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  className="login-password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Text className="login-forgot">
                  Forget password?&nbsp;
                  <a href="/#">Tap here</a>
                </Text>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-button"
                >
                  Log in
                </Button>
              </Form.Item>
              <Form.Item>
                <Text strong className="or-continue-with">
                  or continue with
                </Text>
              </Form.Item>
              <Form.Item>
                <Flex>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="another-login-button"
                    style={{ width: "100%" }}
                  >
                    <GoogleOutlined />
                    Google
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="another-login-button"
                    style={{ width: "100%" }}
                  >
                    <AppleFilled />
                    Apple
                  </Button>
                </Flex>
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Text className="no-account-btn">
                  Don’t have an account yet?&nbsp;
                  <a href="/#">Tap here</a>
                </Text>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} span={12}>
          <div className="barcode-container">
            <img src={Barcode} alt="Barcode" />
            <div className="barcode-text">
              <Text strong>Log in with QR code</Text>
              <p>Scan this code with your camera phone to log in instantly.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default Login;
