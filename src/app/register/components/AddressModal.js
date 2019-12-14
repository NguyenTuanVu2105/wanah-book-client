import React from 'react'
import { Modal } from 'antd'
import MapConfirm from './MapConfirm';

const AddressModal = (props) => {
    const handleOk = e => {
        props.setVisible(false)
      };
    
    const handleCancel = e => {
        props.setVisible(false)
      };

    return (
        <Modal
            title="Xác nhận địa chỉ"
            style={{top: 20}}
            visible={props.visible}
            onCancel={handleCancel}
            onOk={handleOk}
            okText='Xác nhận'
            cancelText='Hủy'
            destroyOnClose
            width={1200}
        >
          <MapConfirm 
            address={props.address} 
            setAddress={props.setAddress}           
            position={props.position}
            setPosition={props.setPosition}>
          </MapConfirm>
        </Modal>
    )
}

export default AddressModal