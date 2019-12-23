import React from 'react'
import { Row, Avatar, Icon, Upload, Form, Input, Select, Button, notification } from 'antd'

import './style.scss'
import { getUserProfile, updateUserProfile } from '../../api/base/profile'
import { uploadFile } from '../../api'
import { getEnv } from '../../helper/env/getEnv'
import { withRouter } from 'react-router-dom'
import AppContext from '../../AppContext'
import AddressModal from '../register/components/AddressModal'

const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
}

const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
}

const BASE_URL = getEnv("BACKEND_URL");

class ProfileUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                src: "http://thuthuat123.com/uploads/2018/01/27/avatar-dep-nhat-83_112148.jpg",
            },
            animateChangeAvatar: 0,
            disabledSubmit: false,
            address: '',
            position: null,
            visible: false
        }
    }
    setVisible = (vis) => {
        this.setState({
          visible: vis
        })
      }
      setAddress = (addr) => {
        this.setState({
          address: addr
        })
      }
      setPosition = (pos) => {
        this.setState({
          position: pos
        })
      }
    fetchData = async () => {
        const profile = await getUserProfile();
        this.setAddress(profile.data.address_detail)
        this.setPosition({
            lat: profile.data.address_latitude,
            lng: profile.data.address_longitude
        })
        profile.data.avatar = BASE_URL + "/" + profile.data.avatar
        this.setState({ profile: profile.data })
    }

    componentDidMount() {
        this.fetchData()
    }

    onChooseFile = ({ data, filename, file }) => {
        this.state.profile.avatar = URL.createObjectURL(file)
        this.setState({ data, filename, file, profile: this.state.profile })
    }

    getMessage = (name) => {
        return this.state[`${name}Err`]
    }

    onChangeInput = name => event => {
        this.state.profile[name] = event.target.value;
        this.setState({
            profile: this.state.profile,
            [`nameErr`]: "",
            disabledSubmit: false
        })
    }

    onValidate = () => {
        let message = "Bạn chưa nhập"
        let isFail = true;
        if (!this.state.profile.first_name) {
            message += " Họ";
            isFail = false;
        }
        if (!this.state.profile.last_name) {
            message += " Tên"
            isFail = false;
        }
        if (!isFail) {
            this.setState({ nameErr: message + "!", disabledSubmit: true })
            return false;
        }
        return true
    }

    onSubmit = async () => {
        if (this.onValidate()) {
            const profileUpdate = {
                "first_name": this.state.profile.first_name,
                "last_name": this.state.profile.last_name,
                "description": this.state.profile.description,
                "address_detail": this.state.address,
                "address_longitude": this.state.position.lon,
                "address_latitude": this.state.position.lat
            }
            const fns = [];
            fns.push(updateUserProfile(profileUpdate))
            if (this.state.file) {
                fns.push(uploadFile(this.state.data, this.state.filename, this.state.file))
            }
            const [updateRes, uploadRes] = await Promise.all(fns)
            if (updateRes.success && (!uploadRes || (uploadRes && uploadRes.success))) {
                notification.success({
                    message: "Cập nhật thành công!"
                })
                this.context._fetchData()
            }
            if (!updateRes.success || (uploadRes && !uploadRes.success)) {
                notification.error({
                    message: "Thất bại!"
                })
            }
        }
    }

    render() {
        return (
            <div className="update_profile">
                <Row justify="center" type="flex" className="avatar">
                    <div className="avatar_profile" onMouseEnter={() => { this.setState({ animateChangeAvatar: 1 }) }} onMouseLeave={() => { this.setState({ animateChangeAvatar: 0 }) }}>
                        <Avatar
                            size={125}
                            src={this.state.profile.avatar}
                        />
                        <div className="change_avatar" style={{ opacity: this.state.animateChangeAvatar }}>
                            <Upload
                                // link to upload
                                customRequest={this.onChooseFile}
                                // end
                                accept={".png,.jpg,.jpeg"}
                                multiple={false}
                                fileList={[]}
                            >
                                <Icon type="camera" theme="filled" className="icon_change_avatar" />
                                <p style={{ textAlign: "center", color: "white", width: "100%" }}>Thay đổi</p>
                            </Upload>
                        </div>
                    </div>
                </Row>
                <Row justify="center" type="flex">
                    <div className="form_update">
                        <Form layout="horizontal" {...formLayout} >
                            <Form.Item label="Họ" help={this.state.nameErr}>
                                <Form layout="inline" className="form_inline">
                                    <Input value={this.state.profile.first_name} onChange={this.onChangeInput("first_name")} onBlur={this.onValidate} />
                                    <div style={{ padding: 5 }}></div>
                                    <Form.Item label="Tên" style={{ margin: 0 }} />
                                    <Input value={this.state.profile.last_name} onChange={this.onChangeInput("last_name")} onBlur={this.onValidate} />
                                </Form>
                            </Form.Item>
                            <Form.Item label="Mô tả">
                                <Input.TextArea value={this.state.profile.description} onChange={this.onChangeInput("description")} />
                            </Form.Item>
                            <Form.Item label={"Địa chỉ"} style={{ margin: 0 }}>
                                <Input value={this.state.address} disabled={true} />
                                <strong onClick={() => this.setVisible(!this.state.visible)} className='confirm-address'>Cập nhật địa chỉ tại đây</strong>
                            </Form.Item>
                            <Form.Item {...buttonItemLayout}>
                                <Button type="primary" onClick={this.onSubmit} disabled={this.state.disabledSubmit}>Cập nhật</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Row>
                <AddressModal 
                address={this.state.address}  
                visible={this.state.visible} 
                setVisible={this.setVisible}
                setAddress={this.setAddress}
                position={this.state.position}
                setPosition={this.setPosition}
                >
                </AddressModal>
            </div>
        )
    }
}

ProfileUpdate.contextType = AppContext;

export default withRouter(ProfileUpdate)