import { ReactNode } from "react";
import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const MainTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <Sidebar />

      <Layout>
        <Header />

        <Content style={{ margin: "24px 16px 0", minHeight: "816px" }}>
          <div style={{ padding: 24, minHeight: 360 }}>{children}</div>
        </Content>

        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainTemplate;
