import React, { useState } from "react";
import { Button, Modal, Input, Select } from "antd";

import AddCircle from "../../Assets/icons/addCircle.svg";

const CreateNewEmployee = () => {
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
                <div className="row">
                    <div className="col-6">
                        <label className="f-14 fw-400">Name</label>
                        <Input className="f-14 mb-20" placeholder="Name" />

                        <label className="f-14 fw-400 mt-20">Salary</label>
                        <Input className="f-14 mb-20" placeholder="Salary" />

                        <label className="f-14 fw-400 mt-20">
                            Bank Country
                        </label>
                        <br />
                        <Select
                            defaultValue="Pakistan"
                            style={{ width: "100%" }}
                            onChange={handleChange}
                            className="mb-20"
                        >
                            <Option value="pakistan">Pakistan</Option>
                            <Option value="saudia">Saudia</Option>
                            <Option value="usa">USA</Option>
                        </Select>

                        <br />
                        <label className="f-14 fw-400 mt-20">
                            Account Number
                        </label>
                        <Input
                            className="f-14 mb-20"
                            placeholder="Account Number"
                        />

                        <label className="f-14 fw-400 mt-20">
                            Account Name
                        </label>
                        <Input
                            className="f-14 mb-45"
                            placeholder="Account Name"
                        />
                    </div>

                    <div className="col-6">
                        <label className="f-14 fw-400">Designation</label>
                        <Input
                            className="f-14 mb-20"
                            placeholder="Designation"
                        />

                        <label className="f-14 fw-400 mt-20">Bank Name</label>
                        <Input className="f-14 mb-20" placeholder="Bank Name" />

                        <label className="f-14 fw-400 mt-20">Branch</label>
                        <Input className="f-14 mb-20" placeholder="Branch" />

                        <label className="f-14 fw-400 mt-20">IBNA number</label>
                        <Input
                            className="f-14 mb-20"
                            placeholder="IBNA number"
                        />

                        <label className="f-14 fw-400 mt-20">
                            Bank Swift Code
                        </label>
                        <Input
                            className="f-14 mb-45"
                            placeholder="Bank Swift Code"
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <Button className="mr-16 button-default">Cancel</Button>
                    <Button className="button-default btn__create">
                        Create
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default CreateNewEmployee;
