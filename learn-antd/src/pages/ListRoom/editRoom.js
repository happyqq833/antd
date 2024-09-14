import { Button, Modal, Form, Input, InputNumber, Select, message, Switch, notification } from "antd";
import {EditOutlined} from "@ant-design/icons";
import { useState } from "react";
import { updateRoom } from "../../services/roomsService";
const {Option} = Select;

function EditRoom(props) {
  const {record, onReload} = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const [form] = Form.useForm();
  const [notiApi, contextHolder] = notification.useNotification();

  const handleClick = () => {
     setIsShowModal(true);
  }
  const handleCancel = () => {
    setIsShowModal(false);
    form.resetFields();
 }
 
 const rules = [
     {
         required: true,
         message: "Bắt buộc"
     },
 ]
 const handleSubmit =  async (values) => {
     const response = await updateRoom(record.id, values);
     if(response) {
         notiApi.success({
             message: "Đã xong!",
             description: `Phòng ${record.name} được cập nhật thành công!`,
         });
         setIsShowModal(false);
         onReload();
     } else {
         notiApi.error({
          message: "Có lỗi!",
          description: `Phòng ${record.name} không được cập nhật thành công!`,
         })
     }
 }

  return(
    <>
      {contextHolder}
      <Button size="small" icon={<EditOutlined/>} onClick={handleClick}/>

      <Modal open={isShowModal} onCancel={handleCancel} title="Chỉnh sửa phòng" footer={null}>
      <Form layout="vertical" name="create-room" onFinish={handleSubmit} form={form} initialValues={record}>
            <Form.Item 
                label = "Tên phòng"
                name= "name"
                rules={rules}
                >
                <Input/>
            </Form.Item>

            <Form.Item 
                label = "Số lượng giường"
                name= "quantityBed"
                rules={rules}
                >
                <InputNumber min={1}/>
            </Form.Item>

            <Form.Item 
                label = "Số người tối đa"
                name= "quantityPeople"
                rules={rules}
                >
                <Input/>
            </Form.Item>

            <Form.Item 
                label = "Mô tả"
                name= "description"
                >
                <Input.TextArea />
            </Form.Item>

            <Form.Item label = "Tiện ích" name= "utils">
                <Select
                    mode="multiple"
                    allowClear
                    style={{
                        width: "100%",
                    }}
                >
                    <Option value = "wifi">Wifi</Option>
                    <Option value = "Nóng lạnh">Nóng lạnh</Option>
                    <Option value = "Điều hòa">Điều hòa</Option>
                </Select>
            </Form.Item>
            
            <Form.Item 
                valuePropName="checked"
                label = "Trạng thái"
                name= "status"
            >
                <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng"/>
            </Form.Item>
            
            <Form.Item 
                valuePropName="checked"
                label = "Loại phòng"
                name= "typeRoom"
            >
                <Switch checkedChildren="VIP" unCheckedChildren="Thường"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Cập nhật</Button>
            </Form.Item>
        </Form>
        
      </Modal>
    </>
  )
}
export default EditRoom;