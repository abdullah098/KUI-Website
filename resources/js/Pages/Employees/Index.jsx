import React, { useState } from "react";
import Layout from "../../layout/Index";
import DataTable from "./../../components/common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import { Button, Menu, Dropdown, Select, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ExportDropdown from "../../Components/Common/ExportDropdown";
import ImportModel from "../../Components/Common/ImportModel";
import EditPencil from "../../Assets/icons/editPencil.svg";
import CreateNewEmployee from "./../../Components/Common/CreateNewEmployee";
import EmployeeIdModal from "./EmployeeIdModal";

const Index = () => {
    const data = [
        {
            id: "09253",
            name: "Inventory",
            designation: "$30,213",
            salary: "10,000",
            bank_name: "HDFC",
            salary_status: "Pending",
            amount_paid: "10,000",
            action: "",
        },
    ];

    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
        },
        {
            name: "ID",
            selector: (row) => <EmployeeIdModal data={row.id} />,
        },
        {
            name: "Name",
            selector: (row) => row.name,
        },
        {
            name: "Designation",
            selector: (row) => row.designation,
        },
        {
            name: "Salary",
            selector: (row) => row.salary,
        },
        {
            name: "Bank name",
            selector: (row) => row.bank_name,
        },
        {
            name: "Salary Status",
            selector: (row) => row.salary_status,
        },
        {
            name: "Amount Paid",
            selector: (row) => row.amount_paid,
        },
        {
            name: "Action",
            selector: (row) => <img src={EditPencil} alt="" />,
        },
    ];

    function onChange(value) {
        console.log(`selected ${value}`);
    }
    function onSearch(val) {
        console.log("search:", val);
    }

    return (
        <Layout currentPage={4}>
            <div className="d-flex justify-content-between mb-20 align-items-center">
                <h1 className="f-14 fw-600 mb-0">Employees</h1>
                <CreateNewEmployee />
            </div>

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
                                <h2 className="f-16 fw-500 mb-0 mr-18">
                                    Showing all Employees
                                </h2>
                                <ExportDropdown />
                                <ImportModel />
                            </div>

                            <div className="d-flex align-items-center">
                                <span className="me-2">View:</span>
                                <Select
                                    showSearch
                                    placeholder="All"
                                    optionFilterProp="children"
                                    className="button-default mr-20"
                                    style={{ width: 95 }}
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children
                                            .toLowerCase()
                                            .indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Select.Option value="all">
                                        All
                                    </Select.Option>
                                    <Select.Option value="faculty">
                                        Faculty
                                    </Select.Option>
                                    <Select.Option value="staff">
                                        Staff
                                    </Select.Option>
                                    <Select.Option value="admin">
                                        Admin
                                    </Select.Option>
                                </Select>

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
