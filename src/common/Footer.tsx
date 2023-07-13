import React from "react";
import { Layout } from "antd";

const { Footer: FooterLayout } = Layout;

const Footer = () => {
  return (
    <FooterLayout style={{ textAlign: "center" }}>
      ©2023 Created by BlackGarlic
    </FooterLayout>
  );
};

export default Footer;
