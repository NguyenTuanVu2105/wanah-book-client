import React from 'react'
import { Row, Avatar, Icon, Upload, Form, Input, Select } from 'antd'

import './style.scss'
import { getUserProfile } from '../../api/base/profile'

const formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
}

class ProfileUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                src: "http://thuthuat123.com/uploads/2018/01/27/avatar-dep-nhat-83_112148.jpg",
            },
            animateChangeAvatar: 0
        }
    }

    async componentDidMount() {
        const profile = await getUserProfile();
        console.log(profile)
        this.setState({ profile: profile.data })
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
                                action={"put link here"}
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
                            <Form.Item label="Họ">
                                <Form layout="inline" className="form_inline">
                                    <Input value={this.state.profile.first_name} />
                                    <div style={{ padding: 5 }}></div>
                                    <Form.Item label="Tên" style={{margin: 0}} />
                                    <Input value={this.state.profile.last_name} />
                                </Form>
                                {/* <Input value={this.state.profile.first_name} /> */}
                            </Form.Item>
                            {/* <Form.Item label="Tên">
                                <Input value={this.state.profile.last_name} />
                            </Form.Item> */}
                            <Form.Item label="Địa chỉ">
                                <Form layout="inline" className="form_inline">
                                    <div className="select_box">
                                        <Form.Item>
                                            <Select
                                                placeholder="Tỉnh/Thành Phố"
                                                style={{ width: "100%" }}
                                            >
                                                <Select.Option value="male">Hà Nội</Select.Option>
                                                <Select.Option value="female">TP HCM</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                    <div style={{ padding: 5 }}></div>
                                    <div className="select_box">
                                        <Form.Item>
                                            <Select
                                                placeholder="Quận/Huyên"
                                                style={{ width: "100%" }}
                                            >
                                                <Select.Option value="male">Nam Từ Liêm</Select.Option>
                                                <Select.Option value="female">Quang Hưng</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                    <div style={{ padding: 5 }}></div>
                                    <div className="select_box">
                                        <Form.Item>
                                            <Select
                                                placeholder="Phường/Xã"
                                                style={{ width: "100%" }}
                                            >
                                                <Select.Option value="male">male</Select.Option>
                                                <Select.Option value="female">female</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </Form>
                            </Form.Item>
                            <Form.Item label={"Địa chỉ cụ thể"}>
                                <Input />
                            </Form.Item>
                            <Form.Item label="Thể loại sách">
                                <Input />
                            </Form.Item>
                            <Form.Item label="Mô tả">
                                <Input.TextArea />
                            </Form.Item>
                        </Form>
                    </div>
                </Row>
            </div>
        )
    }
}

export default ProfileUpdate