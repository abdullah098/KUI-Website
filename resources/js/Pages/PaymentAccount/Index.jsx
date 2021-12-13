import React from "react";
import Layout from "../../layout/Index";
import DataTable from "../../components/common/DataTable";
import FormInput from "../../Components/Common/Antd/FormInput";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import GreenEye from "../../Assets/icons/greenEye.svg";
import EditIcon from "../../Assets/icons/editPencil.svg";
import RemoveIcon from "../../Assets/icons/removeIcon.svg";

const Index = () => {
    const data = [
        {
            id: "03215",
            account_number: "03215",
            swift_code: "03215",
            status: "Active",
            created_at: "2020-05-05",
            updated_at: "2020-05-05",
            action: "",
        },
    ];

    const columns = [
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
            name: "Account Number",
            selector: (row) => row.account_number,
            center: true,
        },
        {
            name: "Swift Code",
            selector: (row) => row.swift_code,
            center: true,
        },
        {
            name: "Status",
            selector: (row) => (
                <Button className="btn__active">{row.status}</Button>
            ),
            center: true,
        },
        {
            name: "Created at",
            selector: (row) => row.created_at,
            center: true,
        },
        {
            name: "Updated at",
            selector: (row) => row.updated_at,
            center: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="d-flex">
                    <Button className="border-0 shadow-none button-default ">
                        <img src={EditIcon} alt="" />
                    </Button>
                    <Button className="border-0 shadow-none button-default">
                        <img src={RemoveIcon} alt="" />
                    </Button>
                </div>
            ),
            center: true,
        },
    ];

    return (
        <Layout currentPage={5}>
            <h1 className="f-14 fw-600 mb-20">Showing all Payment Accounts</h1>

            <div className="primary-card">
                <div className="primary-table">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        keyField="id"
                    >
                        <div className="primary-table-header">
                            <div className="d-flex align-items-center">
                                <h2 className="f-16 fw-500 mb-0">
                                    Showing all student wallets
                                </h2>
                            </div>

                            <div className="d-flex align-items-center">
                                <FormInput className="mb-0" type="search" />
                            </div>
                        </div>
                    </DataTable>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
