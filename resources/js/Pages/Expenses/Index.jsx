import React from "react";
import Layout from "../../layout/Index";
import DataTable from "./../../components/common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import AddExpenseBtn from "./../../Components/Expenses/AddExpenseBtn";
import { Button } from "antd";
import AddCircle from "../../Assets/icons/addCircle.svg";
import { InertiaLink } from "@inertiajs/inertia-react";
import ActionButton from "../../Components/Expenses/ActionButton";

const Index = () => {
    const [actionState, setActionState] = React.useState("start");
    // data for the table to be displayed
    const data = [
        {
            id: 0,
            category: "Inventory",
            total_expenses: "$30,213",
            action: "",
        },
        {
            id: 1,
            category: "Inventory",
            total_expenses: "$30,213",
            action: "",
        },
    ];
    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
        },
        {
            name: "Category",
            selector: (row) => (
                <InertiaLink href={`/expenses/${row.id}`}>
                    <u className="color-persian-blue"> {row.category} </u>
                </InertiaLink>
            ),
        },
        {
            name: "Total Expenses",
            selector: (row) => row.total_expenses,
        },
        {
            name: "Action",
            selector: (row) => <ActionButton />,
        },
    ];

    return (
        <Layout currentPage={2}>
            {/* heading  */}
            <h1 className="f-14 fw-600 mb-20">Expemses</h1>

            {/* data table incluiding add expense button, create new category and search bar*/}
            <div className="primary-card">
                <div className="primary-table">
                    <DataTable
                        columns={columns} // columns for the table imported from constants
                        data={data}
                        pagination
                        keyField="id"
                    >
                        <div className="primary-table-header">
                            <div className="d-flex align-items-center">
                                <h2 className="f-16 fw-500 mb-0">
                                    Showing all Expenses Categories
                                </h2>
                            </div>

                            <div className="d-flex align-items-center">
                                {/* create new category button here */}
                                <Button className="btn__create-new-category mr-20 border-0">
                                    <img
                                        className="me-3"
                                        src={AddCircle}
                                        alt=""
                                    />
                                    Create new Category
                                </Button>

                                {/* add expense button here */}
                                <AddExpenseBtn />

                                {/* search bar here */}
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
