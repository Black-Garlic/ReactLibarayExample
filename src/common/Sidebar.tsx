import { Layout, Menu } from "antd";
import { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

const { Sider } = Layout;

interface MenuOption {
  label: string;
  url: string;
}

const Sidebar = () => {
  const menuList = useMemo(
    () =>
      [
        { label: "메뉴", url: "/44" },
        { label: "메뉴 1", url: "/menu" },
      ] as MenuOption[],
    [],
  );

  const generateMenuList = useCallback(() => {
    return menuList.map((menu, index) => ({
      key: menu.label + "-" + index,
      label: <Link to={menu.url}>{menu.label}</Link>,
    }));
  }, [menuList]);

  return (
    <Sider trigger={null}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={generateMenuList()}
      />
    </Sider>
  );
};

export default Sidebar;
