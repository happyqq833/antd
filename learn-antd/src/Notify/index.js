import { DownOutlined, BellOutlined } from '@ant-design/icons';
import { Badge, Button, Dropdown, Space } from 'antd';
import './Notify.css';

function Notify(){
    const items = [
        {
          label: <div className='notify__item'>
            <div className='notify__item-icon'>
              <BellOutlined/>
            </div>
            <div className='notify__item-content'>
              <div className='notify__item-title'>
                Item 1
              </div>
              <div className='notify__item-time'>
                8 phút trước
              </div>
            </div>
            </div>,
          key: '0',
        },
        {
          label: 'Item 2',
          key: '0',
        },
        {
          label: 'Item 3',
          key: '0',
        },
        {
          label: 'Item 4',
          key: '0',
        },
        {
          label: 'Item 5',
          key: '0',
        },
        {
          label: 'Item 6',
          key: '0',
        },
        {
          label: 'Item 7',
          key: '0',
        },
        {
          label: 'Item 8',
          key: '0',
        },
      ];
    
    return(
        <>
         <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
          dropdownRender={(menu) => (
            <>
                <div className='notify__dropdown'>
                    <div className='notify__header'>
                        <div className='notify__header--title'>
                            <BellOutlined/> Notification
                        </div>
                        <Button type='link'>View All</Button>
                    </div>
                    <div className='notify__body'>
                      {menu}
                    </div>
                </div>
            </>
           )}
        >
            <Badge dot>
              <Button type='text' icon = {<BellOutlined/>}></Button>
            </Badge>
        </Dropdown>
        </>
    )
}
export default Notify;