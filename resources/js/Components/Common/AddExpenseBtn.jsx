import React, { useState } from "react";
import {
    Button,
    Modal,
    Select,
    Input,
    DatePicker,
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
                <div className="row">
                    <h4 className="f-18 fw-600">Add Expense</h4>
                    <div className="col-6">
                        <label htmlFor="">Select Collage</label> <br />
                        <Select
                            defaultValue="KIU"
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            className="mb-20"
                        >
                            <Option value="kiu">KIU</Option>
                            <Option value="kui">KUI</Option>
                        </Select>
                        <br />
                        <label htmlFor="">Payment Method</label> <br />
                        <Select
                            defaultValue="Cash"
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            className="mb-20"
                        >
                            <Option value="cash">Cash</Option>
                            <Option value="online">Online</Option>
                        </Select>
                        <br />
                        <label htmlFor="">Bank Name</label> <br />
                        <Input className="mb-20" placeholder="Bank Name" />
                        <label htmlFor="">Bank Country</label> <br />
                        <Select
                            defaultValue="Aaa"
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            className="mb-20"
                        >
                            <Option value="aaa">Aaa</Option>
                            <Option value="bbb">Bbb</Option>
                        </Select>
                        <br />
                        <label htmlFor="">Payment Date</label> <br />
                        <Space direction="vertical" className="mb-20">
                            <DatePicker onChange={onChangeDate} />
                        </Space>
                    </div>

                    <div className="col-6">
                        <label htmlFor="">Expense Category *</label> <br />
                        <Select
                            defaultValue="KIU"
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            className="mb-20"
                        >
                            <Option value="kiu">KIU</Option>
                            <Option value="kui">KUI</Option>
                        </Select>
                        <br />
                        <label htmlFor="">Paid to</label>
                        <Input className="mb-20" placeholder="Paid to" />
                        <label htmlFor="">Bank Branch</label>
                        <Input className="mb-20" placeholder="Bank Branch" />
                        <label htmlFor="">To Account No.</label>
                        <Input className="mb-20" placeholder="To Account No." />
                    </div>

                    <div>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Drag & Drop files</p>
                            <p className="ant-upload-hint">Browse</p>
                        </Dragger>
                    </div>

                    <div className="d-flex justify-content-end mt-23">
                        <Button className="mr-16 button-default">Cancel</Button>
                        <Button className="button-default btn__create">
                            Create
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default AddExpenseBtn;
