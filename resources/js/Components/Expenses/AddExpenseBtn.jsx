import React, { useState } from "react";
import {
    Button,
    Modal,
    Select,
    Input,
    DatePicker,
    Form,
    Space,
    Upload,
    message,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

const AddExpenseBtn = () => {
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

    // {
    //     select
    // }
    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    // {
    //     date
    // }
    function onChangeDate(date, dateString) {
        console.log(date, dateString);
    }

    // {
    //     upload
    // }
    const { Dragger } = Upload;

    const props = {
        name: "file",
        multiple: true,
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(
                    `${info.file.name} file uploaded successfully.`
                );
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };

    // {
    //     form
    // }
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Button className="btn__expense mr-20" onClick={showModal}>
                Add Expense
            </Button>
            <Modal
                visible={isModalVisible}
                width={776}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    <div className="row">
                        <h4 className="f-18 fw-600">Add Expense</h4>
                        <div className="col-6">
                            <Form.Item
                                label="Select Collage"
                                name="select_collage"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select collage!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="KIU"
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                    className="select-dropdown-custom"
                                >
                                    <Option value="kiu">KIU</Option>
                                    <Option value="kui">KUI</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Payment Method"
                                name="payment_method"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please select Payment Method!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Cash"
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                    className="select-dropdown-custom"
                                >
                                    <Option value="cash">Cash</Option>
                                    <Option value="online">Online</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Bank Name"
                                name="bank_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your BankName!",
                                    },
                                ]}
                            >
                                <Input
                                    className="custom-input"
                                    placeholder="Bank Name"
                                />
                            </Form.Item>
                            <Form.Item
                                label="Bank Country"
                                name="bank_country"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select Bank Country!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Aaa"
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                    className="select-dropdown-custom"
                                >
                                    <Option value="aaa">Aaa</Option>
                                    <Option value="bbb">Bbb</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Payment Date"
                                name="payment_date"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select Payment Date!",
                                    },
                                ]}
                            >
                                <Space direction="vertical" className="mb-20">
                                    <DatePicker
                                        className="custom-input"
                                        onChange={onChangeDate}
                                    />
                                </Space>
                            </Form.Item>
                        </div>

                        <div className="col-6">
                            <Form.Item
                                label="Expense Category"
                                name="expense_category"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please Select Expense Category!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="KIU"
                                    style={{ width: "100%" }}
                                    onChange={handleChange}
                                    className="select-dropdown-custom"
                                >
                                    <Option value="kiu">KIU</Option>
                                    <Option value="kui">KUI</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Paid to"
                                name="paid_to"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter Paid to!",
                                    },
                                ]}
                            >
                                <Input
                                    className="custom-input"
                                    placeholder="Paid to"
                                />
                            </Form.Item>
                            <Form.Item
                                label="Bank Branch"
                                name="bank_branch"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Enter bank Branch!",
                                    },
                                ]}
                            >
                                <Input
                                    className="custom-input"
                                    placeholder="Bank Branch"
                                />
                            </Form.Item>
                            <Form.Item
                                label="To Account No."
                                name="to_account_no"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Please Enter to account number!",
                                    },
                                ]}
                            >
                                <Input
                                    className="custom-input"
                                    placeholder="To Account No."
                                />
                            </Form.Item>
                        </div>

                        <div>
                            <Dragger {...props} className="file-upload-btn">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">
                                    Drag & Drop files
                                </p>
                                <p className="ant-upload-hint">Browse</p>
                            </Dragger>
                        </div>

                        <div className="d-flex justify-content-end mt-23">
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
                </Form>
            </Modal>
        </>
    );
};

export default AddExpenseBtn;
