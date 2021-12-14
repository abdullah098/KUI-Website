import React from "react";
import Layout from "../../layout/Index";
import DataTable from "../../components/common/DataTable";
import FormInput from "../../Components/Common/Antd/FormInput";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "antd";
import GreenEye from "../../Assets/icons/greenEye.svg";
import StatusDropdown from "../../Components/FinancialPayment/StatusDropdown";

const Index = () => {
    // data from table and colums are hardcoded for now
    const data = [
        {
            id: 0,
            student_name: "Muzamil Afirid",
            fee_for: "Study",
            payment_method: "Bank Transfer",
            semester: 6,
            created_by: "John Deo",
            status: "Approved",
            actions: "",
        },
        {
            id: 1,
            student_name: "Muzamil Afirid",
            fee_for: "Study",
            payment_method: "Bank Transfer",
            semester: 6,
            created_by: "John Deo",
            status: "Rejected",
            actions: "",
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
            // this colums is for the status dropdown
            name: "Status",
            cell: (keyField) => (
                <StatusDropdown
                    dataId={keyField.id}
                    dataStatus={keyField.status}
                />
            ),
            center: true,
        },
        {
            // this column is for the action buttons that redirect to the details page
            name: "Actions",
            cell: (row) => (
                <InertiaLink href={`/financial-payments/${row.id}`}>
                    <Button className="border-0 shadow-none">
                        <img src={GreenEye} alt="" />
                    </Button>
                </InertiaLink>
            ),
            center: true,
        },
    ];

    return (
        <Layout currentPage={1}>
            {/* headding  */}
            <h1 className="f-14 fw-600 mb-20">Financial payments</h1>

            {/* data table section including search bar */}
            <div className="primary-card">
                <div className="primary-table">
                    {/* data table  */}
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                        keyField="id"
                    >
                        <div className="primary-table-header">
                            <div className="d-flex align-items-center">
                                <h2 className="f-16 fw-500 mb-0">
                                    Showing all payments :
                                    <span className="mx-1">16</span>
                                </h2>
                            </div>

                            {/* search bar */}
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
