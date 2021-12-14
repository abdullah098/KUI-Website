import React from "react";
import { Menu, Dropdown, Button, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";

const StatusDropdown = ({ dataId, dataStatus }) => {
    const [status, setStatus] = React.useState(dataStatus);

    const [visible, setVisible] = React.useState(false);

    const handleVisible = () => {
        setVisible(!visible);
        if (status === "Approved") {
            setStatus("Rejected");
        } else if (status === "Rejected") {
            setStatus("Approved");
        }
    };
    const handelChange = () => {
        setVisible(false);
    };

    const menu = (
        <Menu>
            <Menu.Item key="1">
                <Input.TextArea
                    className="f-10 text-area-custom"
                    rows={4}
                    placeholder="Please enter a reason"
                />
            </Menu.Item>
            <Menu.Item key="2">
                <div className="d-flex justify-content-end">
                    <Button
                        className="cancel-btn-rejected-approve p-0"
                        onClick={handelChange}
                    >
                        Cancel
                    </Button>
                    <Button className="ms-2 save-btn-rejected-approve p-0">
                        Save
                    </Button>
                </div>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Dropdown
                overlay={menu}
                placement="bottomCenter"
                arrow
                trigger={["click"]}
                visible={visible}
            >
                <Button
                    className={`${
                        status === "Approved" ? "btn__approve" : "btn__reject"
                    }`}
                    onClick={handleVisible}
                >
                    {status === "Approved" ? "Approved" : "Rejected"}
                    <DownOutlined />
                </Button>
            </Dropdown>
        </>
    );
};

export default StatusDropdown;
