import { Menu } from "antd";
import { CheckOutlined, PlusOutlined} from "@ant-design/icons"
import { Children } from "react";
import { Link } from "react-router-dom";

function MenuSider () {
    const items = [
        {
            label: <Link to="/">Dashboard</Link>,
            icon: <CheckOutlined/>,
            key: "/",
        },
        {
            label: "Actions",
            icon: <CheckOutlined/>,
            key: "menu-2",
            children: [
                {
                    label:<Link to="/book-room" >Book Room</Link>,
                    icon: <CheckOutlined/>,
                    key: "/book-room",
                },
                {
                    label:<Link to="/create-room" >Create Room</Link>,
                    icon: <PlusOutlined/>,
                    key: "/create-room",
                   
                },
                {
                    label:<Link to="/list-room" >List Room</Link>,
                    icon: <PlusOutlined/>,
                    key: "/list-room",
                   
                }

            ]
        },
    ]
    return(
        <>
          <Menu
            mode="inline"
            items={items}
            defaultSelectedKeys={"/"}
            defaultOpenKeys={["menu-1"]}/>
        </>
    )
}

export default MenuSider;