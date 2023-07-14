import { Layout, Menu } from "antd";
import { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

const { Sider } = Layout;

interface MenuOption {
  label: string;
  url: string;
  children?: MenuOption[];
}

const Sidebar = () => {
  const menuList = useMemo(
    () =>
      [
        { label: "Home", url: "/" },
        { label: "React PDF", url: "/react-pdf" },
        { label: "React File Viewer", url: "/react-file-viewer" },
        { label: "React Image Crop", url: "/react-image-crop" },
        {
          label: "React Beautiful DnD",
          url: "/react-beautiful-dnd",
          children: [
            { label: "Single - vertical", url: "/single-vertical" },
            { label: "Single - horizon", url: "/single-horizon" },
            { label: "Multi - vertical", url: "/multi-vertical" },
            { label: "Multi - horizon", url: "/multi-horizon" },
          ],
        },
        {
          label: "TipTap Editor",
          url: "/tiptap",
          children: [
            { label: "Simple", url: "/simple" },
            { label: "Editor", url: "/editor" },
          ],
        },
      ] as MenuOption[],
    [],
  );

  const generateMenuList = useCallback(() => {
    return menuList.map((menu, index) => {
      if (menu.children) {
        return {
          key: menu.label + "-" + index,
          label: menu.label,
          children: menu.children.map((childMenu) => ({
            key: childMenu.label + "-" + index,
            label: <Link to={menu.url + childMenu.url}>{childMenu.label}</Link>,
          })),
        };
      } else {
        return {
          key: menu.label + "-" + index,
          label: <Link to={menu.url}>{menu.label}</Link>,
        };
      }
    });
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
