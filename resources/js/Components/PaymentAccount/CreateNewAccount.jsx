import React, { useState } from "react";
import { Modal, Button, Input, Switch, Form } from "antd";
import AddCircle from "../../Assets/icons/addCircle.svg";

const CreateNewAccount = () => {
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
        // switch
    }
    const [switch_state, setSwitchState] = useState(true);
    const onSwitchChange = () => {
        setSwitchState(!switch_state);
    };

    {
        // form
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
                onClick={showModal}
                className="btn__create-new-category mr-20 border-0 bg-transparent"
            >
                <img className="me-3" src={AddCircle} alt="" />
                Create new
            </Button>
            <Modal
                visible={isModalVisible}
                width={776}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <h4 className="f-18 fw-600 mb-0">Create Payment Account</h4>

                    {
                        // {from}
                    }
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout="vertical"
                    >
                        <div className="row mt-36">
                            <div className="col-6">
                                <Form.Item
                                    label="Account Name"
                                    name="accountName"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your account name!",
                                        },
                                    ]}
                                >
                                    <Input
                                        className="custom-input"
                                        placeholder="Enter Account Name"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Bank branch (English/Arabic)"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Bank branch (English/Arabic)!",
                                        },
                                    ]}
                                >
                                    <Input
                                        className="custom-input"
                                        placeholder="Enter Bank branch"
                                    />
                                </Form.Item>

                                <div className="row mb-47">
                                    <div className="col-8">
                                        <Form.Item
                                            label="Swift Code"
                                            name="swiftCode"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your swift code!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                className="custom-input"
                                                placeholder="Enter Swift Code"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="col-4">
                                        <Form.Item label="Status" name="status">
                                            <Switch
                                                className={`${
                                                    switch_state === true
                                                        ? "bg-success mt-1"
                                                        : "bg-grey mt-1"
                                                }`}
                                                checked={switch_state}
                                                onChange={onSwitchChange}
                                            />
                                            <span className="ms-1 f-10">
                                                {switch_state
                                                    ? "Active"
                                                    : "Inactive"}
                                            </span>
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <Form.Item
                                    label="Bank name (English/Arabic)"
                                    name="bankName"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Bank name (English/Arabic)!",
                                        },
                                    ]}
                                >
                                    <Input
                                        className=" custom-input"
                                        placeholder="Enter Bank name"
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Account number"
                                    name="accountNumber"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Account number!",
                                        },
                                    ]}
                                >
                                    <Input
                                        className="custom-input"
                                        placeholder="Enter Account number"
                                    />
                                </Form.Item>
                            </div>
                        </div>
                    </Form>

                    {
                        // cancel save button
                    }
                    <div className="d-flex justify-content-end">
                        <Button
                            className="mr-16 button-default cancel-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button className="button-default btn__create">
                            Create
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CreateNewAccount;
