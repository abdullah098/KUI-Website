import React from "react";
import Layout from "../../layout/Index";
import DataTable from "../../components/common/DataTable";
import FormInput from "../../Components/Common/Antd/FormInput";
import { InertiaLink } from "@inertiajs/inertia-react";
// import { columns } from "../../Constants/TableColumns/AllInventoryExpense.js";
import ArrowBack from "../../Assets/icons/button-arrow-back.svg";
import GreenEye from "../../Assets/icons/greenEye.svg";
import { Button } from "antd";

const Index = ({ id }) => {
    const data = [
        {
            expense_id: 0,
            payment_method: "Cash",
            date: "12/12/2020",
            actions: "",
        },
        {
            expense_id: 1,
            payment_method: "Cash",
            date: "12/12/2020",
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
            name: "Expense ID",
            selector: (row) => row.expense_id,
            center: true,
        },
        {
            name: "Payment Method",
            selector: (row) => row.payment_method,
            center: true,
        },
        {
            name: "Date",
            selector: (row) => row.date,
            center: true,
        },
        {
            name: "Actions",
            cell: (row) => (
                <InertiaLink href={`/expenses/${id}/${row.expense_id}`}>
                    <Button ghost>
                        <img src={GreenEye} alt="" />
                    </Button>
                </InertiaLink>
            ),
            center: true,
        },
    ];

    return (
        <Layout currentPage={2}>
            <InertiaLink href="" className="button-back">
                <img src={ArrowBack} />
                <span className="f-18 fw-600 color-secondary">Inventory</span>
            </InertiaLink>

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
                                    Showing all Inventory expnses
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
