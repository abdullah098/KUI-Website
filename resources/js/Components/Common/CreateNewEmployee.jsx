import React, { useState } from "react";
import { Button, Modal, Input, Select, Form } from "antd";

import AddCircle from "../../Assets/icons/addCircle.svg";

const CreateNewEmployee = () => {
    {
        // modal
    }
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    {
        // select
    }
    const { Option } = Select;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    {
        // from
    }
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Button
                className="btn__create-new-category mr-20 border-0 bg-transparent"
                onClick={showModal}
            >
                <img className="me-3" src={AddCircle} alt="" />
                Create new
            </Button>
            <Modal
                visible={isModalVisible}
                width={767}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <h4 className="f-18 fw-600">Create New Employee</h4>

                {/* form  */}
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <div className="row">
                        <div className="col-6">
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Name!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Name"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Salary"
                                name="salary"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Salary!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Salary"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Bank Country"
                                name="bankCountry"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your Bank Country!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Pakistan"
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                    className="select-dropdown-custom"
                                >
                                    <Option value="pakistan">Pakistan</Option>
                                    <Option value="saudia">Saudia</Option>
                                    <Option value="usa">USA</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Account Number"
                                name="accountNumber"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your Account Number!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Account Number"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Account Name"
                                name="accountName"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your Account Name!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Account Name"
                                />
                            </Form.Item>
                        </div>

                        <div className="col-6">
                            <Form.Item
                                label="Designation"
                                name="designation"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your Designation!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Designation"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Bank Name"
                                name="bankName"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Bank Name!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Bank Name"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Branch"
                                name="branch"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Branch!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Branch"
                                />
                            </Form.Item>

                            <Form.Item
                                label="IBNA number"
                                name="ibnaNumber"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your IBNA number!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="IBNA number"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Bank Swift Code"
                                name="bankSwiftCode"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please input your Bank Swift Code!",
                                    },
                                ]}
                            >
                                <Input
                                    className="f-14 custom-input"
                                    placeholder="Bank Swift Code"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </Form>

                {/* button create cancel */}
                <div className="d-flex justify-content-end">
                    <Button
                        className="mr-16 button-default"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button className="button-default btn__create">
                        Create
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default CreateNewEmployee;
