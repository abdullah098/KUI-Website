import React, { useState } from "react";
import { Modal, Button, Upload, message } from "antd";
import ImportIcon from "../../Assets/icons/Import.svg";
import { InboxOutlined } from "@ant-design/icons";

const ImportModel = () => {
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
            <Button
                className="button-default"
                onClick={showModal}
                icon={<img className="mr-8" src={ImportIcon} alt={"import"} />}
            >
                <span>Import</span>
            </Button>
            <Modal
                visible={isModalVisible}
                width={776}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="row">
                    <h4 className="f-14 fw-400">File Upload</h4>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Drag & Drop files</p>
                        <p className="ant-upload-hint">Browse</p>
                    </Dragger>

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

export default ImportModel;
