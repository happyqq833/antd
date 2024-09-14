import { Button, Popconfirm } from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import { deleteRoom } from "../../services/roomsService";

function DeleteRoom(props) {
    const {record, onReload} = props;
    
    const handleDelete = async() => {
        const response = await deleteRoom(record.id);
        if(response) {
            onReload();
            alert("Xóa thành công");
        } else{
            alert("Xóa không thành công");
        }
    };

    return (
        <>
            <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
                 <Button danger size="small" icon={<DeleteOutlined/>} />
            </Popconfirm>
        </>
    )
}

export default DeleteRoom;