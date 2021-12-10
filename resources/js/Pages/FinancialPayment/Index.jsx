import React from "react";
import Layout from "../../layout/Index";
import DataTable from "../../components/common/DataTable";
import FormInput from "../../Components/Common/Antd/FormInput";
import { InertiaLink } from "@inertiajs/inertia-react";
import { columns } from "../../Constants/TableColumns/FinancialPayment";

const Index = () => {
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
            status: "Approved",
            actions: "",
        },
    ];

    // const [visible, setVisible] = React.useState(false);
    // const handleVisibilty = () => {
    //     setVisible(true);
    // };

    return (
        <Layout currentPage={1}>
            <h1 className="f-14 fw-600 mb-20">Financial payments</h1>

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
                                    Showing all payments :
                                    <span className="mx-1">16</span>
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
