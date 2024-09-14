import { Badge, Table, Tag, Tooltip } from "antd";
import DeleteRoom from "./deleteRoom";
import EditRoom from "./editRoom";

function RoomTable(props) {
    const {rooms, onReload} = props;
    const columns= [
        {
            title: "Tên phòng",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Số giường",
            dataIndex: "quantityBed",
            key: "quantityBed",
        },
        {
            title: "Số người",
            dataIndex: "quantityPeople",
            key: "quantityPeople",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (_, record) => {
                return <>
                    {record.status ? (
                        <>
                            <Tag color="green">Còn phòng</Tag>
                            {/* <Badge color="red" text="Hết phòng">   
                            </Badge> */}
                         </>
                       
                    ) : (
                        <>
                            <Tag color="red">Hết phòng</Tag>
                            {/* <Badge color="red" text="Hết phòng">   
                            </Badge> */}
                         </>
                    ) }
                </>;
            }
        },
        {
            title: "Loại phòng",
            dataIndex: "typeRoom",
            key: "typeRoom",
            render: (_, record) => {
                return <>
                    {record.typeRoom ? (
                        <>
                        <Tooltip title = "Phòng VIP chuẩn 5 sao">
                        <Tag color="purple">VIP</Tag>
                        </Tooltip>
                           
                            {/* <Badge color="purple" text="VIP">   
                            </Badge> */}
                        </>
                    ) : (
                        <>
                        <Tag color="gray">Thường</Tag>
                        {/* <Badge color="gray" text="Thường">   
                        </Badge> */}
                        </>
                    ) }
                </>;
            }
        },
        {
            title: "Thao tác",
            key: "actions",
            render: (_, record) => {
                return (
                <>
                    <DeleteRoom record={record} onReload = {onReload}/>
                    <EditRoom record={record} onReload = {onReload}/>
                </>
                );
            }
        },

    ];

    return(
        <>
            <Table dataSource={rooms} columns={columns} rowKey="id"/>
           
        </>
    )
}
export default RoomTable;