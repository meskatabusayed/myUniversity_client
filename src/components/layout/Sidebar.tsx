import { Layout, Menu  } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes.";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const {  Sider } = Layout; 

const userRole = {
  ADMIN : "admin",
  FACULTY : "faculty",
  STUDENT : "student"
}



const Sidebar = () => {
  const role = "admin";
  let sidebarItems;
  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths , "admin")
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths , "faculty")
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths , "student")
      break;
  
    default:
      break;
  }




  return (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>My UNIVERSITY</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
  )
}

export default Sidebar
