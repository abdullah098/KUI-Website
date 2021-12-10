import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { InertiaLink } from "@inertiajs/inertia-react";
import GreenEye from "../../Assets/icons/greenEye.svg";

// const useEffect = () => {

// };

export const columns = [
    {
        name: "S.no",
        selector: (row, index) => index + 1,
        center: true,
    },
    {
        name: "ID",
        selector: (row) => row.id,
        center: true,
    },
    {
        name: "Student Name",
        selector: (row) => row.student_name,
        center: true,
    },
    {
        name: "Payment Method",
        selector: (row) => row.payment_method,
        center: true,
    },
    {
        name: "Semester",
        selector: (row) => row.semester,
        center: true,
    },
    {
        name: "Created By",
        selector: (row) => row.created_by,
        center: true,
    },
    {
        name: "Status",
        cell: () => (
            <Dropdown
                overlay={menu}
                placement="bottomCenter"
                arrow
                // visible={visible}
            >
                <Button className="btn__approve">
                    Approved <DownOutlined />
                </Button>
            </Dropdown>
        ),
        center: true,
    },
    {
        name: "Actions",
        cell: (row) => (
            <InertiaLink href={`/financial-payments/${row.id}`}>
                <Button ghost>
                    <img src={GreenEye} alt="" />
                </Button>
            </InertiaLink>
        ),
        center: true,
    },
];

const menu = (
    <Menu>
        <Menu.Item key="1">
            <input type="text" />
        </Menu.Item>
        <Menu.Item key="2">
            <div className="d-flex justify-content-end">
                <Button>Cancel</Button>
                <Button className="ms-2">Save</Button>
            </div>
        </Menu.Item>
    </Menu>
);
