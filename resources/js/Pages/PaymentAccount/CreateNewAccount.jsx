import React, { useState } from "react";
import { Modal, Button, Input, Switch } from "antd";
import AddCircle from "../../Assets/icons/addCircle.svg";

const CreateNewAccount = () => {
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
    //     switch
    // }
    const onSwitchChange = (checked) => {
        console.log(`switch to ${checked}`);
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

                    <div className="row mt-36">
                        <div className="col-6">
                            <label htmlFor="">Account Name</label>
                            <Input
                                className="mb-20"
                                placeholder="Enter Account Name"
                            />

                            <label htmlFor="">
                                Bank branch (English/Arabic)
                            </label>
                            <Input
                                className="mb-20"
                                placeholder="Enter Bank branch"
                            />

                            <div className="d-flex justify-content-between mb-47">
                                <div>
                                    <label htmlFor="">Swift Code</label>
                                    <Input placeholder="Enter Swift Code" />
                                </div>
                                <div>
                                    <label htmlFor="">Status</label>
                                    <Switch
                                        defaultChecked
                                        onChange={onSwitchChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="">Bank name (English/Arabic)</label>
                            <Input
                                className="mb-20"
                                placeholder="Enter Bank name"
                            />

                            <label htmlFor="">Account number</label>
                            <Input placeholder="Enter Account number" />
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
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

export default CreateNewAccount;
