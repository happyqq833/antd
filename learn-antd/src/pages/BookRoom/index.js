import { Button, Checkbox, Col, Input, Radio, Row, Select, Space } from "antd";
import { DatePicker } from "antd";
import { useState } from "react";
import {  bookRoom } from "../../services/bookRoomService";
const {RangePicker} = DatePicker;

function BookRoom (){

  const [data, setData] = useState({
    time: "14 giờ"
  });

  const optionsTime = [];
  for (let i = 7; i <= 24; i++) {
    optionsTime.push({
      value: i > 9 ? `${i} giờ` : `0${i} giờ`,  
      label: i > 9 ? `${i} giờ` : `0${i} giờ`,  
    });
  }

  const handleChangeInput = (e) => {
    const object = {
      ...data,
      [e.target.name]: e.target.value
    };
    setData(object);
  }
  const handleChangeCheckbox = (e) =>{
    const object = {
      ...data,
      services: e
    };
    setData(object);
  }
  const handleChangeDate = (dates, dateStrings) =>{
    const object = {
      ...data,
      date: dateStrings
    };
    setData(object);
  }
 const handleChangeSelect = (e) => {
  const object = {
    ...data,
    time: e,
  };
  setData(object);
 }
  const handleSubmit = async() => {
    const response = await bookRoom(data);
    if(response){
      alert("Chúc mừng bạn đã đặt phong thành công");
    } else{
      alert("Vui lòng đặt lại sau");
    }
  };

  return (
    <>
      <h2>Đặt phòng</h2>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <p>Họ tên</p>
          <Input name="fullname" placeholder="Ví dụ: Lê Văn A" onChange={handleChangeInput}/>
        </Col>
        <Col span={12}>
          <p>Số điện thoại</p>
          <Input name="phone" placeholder="Ví dụ: 0123456789" onChange={handleChangeInput}/>
        </Col>
        <Col span={12}>
          <p>Email</p>
          <Input name="email" placeholder="Ví dụ: A@email.com" onChange={handleChangeInput}/>
        </Col>

        <Col span={12}>
          <p>Dịch vụ thêm</p>
          <Checkbox.Group onChange={handleChangeCheckbox}>
            <Space direction="vertical">
            <Checkbox value="Xe máy" >Xe máy</Checkbox>
            <Checkbox value="Ô tô 4 chỗ" >Ô tô 4 chỗ</Checkbox>
            <Checkbox value="Ô tô 7 chỗ" >Ô tô 7 chỗ</Checkbox>
            <Checkbox value="Ô tô 16 chỗ" >Ô tô 16 chỗ</Checkbox>
            </Space> 
          </Checkbox.Group>
        </Col>

        <Col span={12}>
          <p>Chọn ngày</p>
          <RangePicker placeholder={["Ngày nhận phòng", "Ngày trả phòng"]} format="DD/MM/YYYY" onChange={handleChangeDate}/>
        </Col>

        <Col span={12}>
          <p>Giờ nhận phòng</p>
          <Select options={optionsTime} style={{
            width:"100%",
          }} 
          defaultValue={data.time}
          onChange={handleChangeSelect}/>
        </Col>


        <Col span={12}>
          <p>Quà tặng</p>
          <Radio.Group name="gift" onChange={handleChangeInput}>
            <Space direction="vertical">
            <Radio value="Áo" >Áo</Radio>
            <Radio value="Mũ" >Mũ</Radio>
            <Radio value="Kem chống nắng" >Kem chống nắng</Radio>
            </Space> 
          </Radio.Group>
        </Col>

        <Col span={24}>
          <Button  type="primary" onClick={handleSubmit} >Đặt phòng</Button>
        </Col>
        </Row>
    </>
  )
}
export default BookRoom;