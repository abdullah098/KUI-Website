import React from "react";
import Layout from "../../layout/Index";
import DataTable from "../../components/common/DataTable";
import FormInput from "../../Components/Common/Antd/FormInput";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import GreenEye from "../../Assets/icons/greenEye.svg";

const Index = () => {
    const data = [
        {
            id: 0,
            wallet_id: "03215",
            student_id: "ID-12345",
            student_name: "John Doe",
            total_usd: "$30,213",
            spent_usd: "$30,213",
            total_sar: "ريال 30,213",
            spent_sar: "ريال 30,213",
        },
    ];

    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
            center: true,
        },
        {
            name: "Wallet ID",
            selector: (row) => row.wallet_id,
            center: true,
        },
        {
            name: "Student Name",
            cell: (row) => (
                <div>
                    <h6 className="f-14 mb-0">{row.student_name}</h6>
                    <span className="f-13 fw-400 color-jumbo">
                        ({row.student_id})
                    </span>
                </div>
            ),
            // selector: (row) => row.student_name,
            center: true,
        },
        {
            name: "Total USD (SAR)",
            cell: (row) => (
                <div>
                    <span>{row.total_usd}</span>
                    <span className="f-13 fw-400 color-jumbo">
                        ({row.total_sar})
                    </span>
                </div>
            ),
            // selector: (row) => row.total_usd,
            center: true,
        },
        {
            name: "Spent USD (SAR)",
            cell: (row) => (
                <div>
                    <span>{row.spent_usd}</span>
                    <span className="f-13 fw-400 color-jumbo">
                        ({row.spent_sar})
                    </span>
                </div>
            ),
            // selector: (row) => row.spent_usd,
            center: true,
        },
    ];

    return (
        <Layout currentPage={3}>
            <h1 className="f-14 fw-600 mb-20">Student wallets</h1>

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
