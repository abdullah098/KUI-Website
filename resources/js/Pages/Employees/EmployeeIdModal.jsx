import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Divider } from "antd";
import ExportDropdown from "../../Components/Common/ExportDropdown";

const EmployeeIdModal = ({ data }) => {
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
    return (
        <>
            <Button onClick={showModal} className="button-default border-0">
                <u>{data}</u>
            </Button>
            <Modal
                visible={isModalVisible}
                width={932}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div>
                    <h4 className="f-18 fw-600">Details</h4>
                    <Divider />
                    <div className="row">
                        <div className="col-6">
                            <div className="d-flex justify-content-between align-items-center color-grey-F8 py-9 px-6">
                                <label className="f-14 fw-500">User ID</label>
                                <h4 className="f-16 fw-500 mb-0">2316</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-25 px-6">
                                <label className="f-14 fw-500">
                                    Designation
                                </label>
                                <h4 className="f-16 fw-500 mb-0">Faculty</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center color-grey-F8 py-9 px-6">
                                <label className="f-14 fw-500">Bank</label>
                                <h4 className="f-16 fw-500 mb-0">Demo Bank</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-25 px-6">
                                <label className="f-14 fw-500">Branch</label>
                                <h4 className="f-16 fw-500 mb-0">
                                    Demo Branch
                                </h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center color-grey-F8 py-9 px-6">
                                <label className="f-14 fw-500">
                                    Account No
                                </label>
                                <h4 className="f-16 fw-500 mb-0">
                                    96 05230 0228 2340 0014 0000
                                </h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-25 px-6">
                                <label className="f-14 fw-500">
                                    Account name
                                </label>
                                <h4 className="f-16 fw-500 mb-0">John Doe</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center color-grey-F8 py-9 px-6">
                                <label className="f-14 fw-500">
                                    Salary Status
                                </label>
                                <h4 className="f-16 fw-500 mb-0">Paid</h4>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="d-flex justify-content-between align-items-center color-grey-F8 py-9 px-6">
                                <label className="f-14 fw-500">Name</label>
                                <h4 className="f-16 fw-500 mb-0">John Doe</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-25 px-6">
                                <label className="f-14 fw-500">Salary</label>
                                <h4 className="f-16 fw-500 mb-0">3500 (SAR)</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center color-grey-F8 py-9 px-6">
                                <label className="f-14 fw-500">
                                    Bank Country
                                </label>
                                <h4 className="f-16 fw-500 mb-0">Pakistan</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-25 px-6">
                                <label className="f-14 fw-500">
                                    Bank swift code
                                </label>
                                <h4 className="f-16 fw-500 mb-0">0321</h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center color-grey-F8 py-9 px-6">
                                <label className="f-14 fw-500">
                                    IBAN number
                                </label>
                                <h4 className="f-16 fw-500 mb-0">
                                    96 05230 0228 2340 0014 0000
                                </h4>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-25 px-6">
                                <label className="f-14 fw-500">
                                    Amount Paid
                                </label>
                                <h4 className="f-16 fw-500 mb-0">200 (SAR)</h4>
                            </div>
                        </div>
                    </div>
                    <Divider />

                    <div className="text-end">
                        <ExportDropdown />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default EmployeeIdModal;
