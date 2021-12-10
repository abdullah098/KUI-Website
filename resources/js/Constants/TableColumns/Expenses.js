import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import EditPencil from "../../Assets/icons/editPencil.svg";
import { Button } from "antd";

const handleApproveRejectChange = () => {
    return (
        <>
            <div className="d-flex">
                <Button>approve</Button>
                <Button>reject</Button>
            </div>
        </>
    );
};

export const columns = [
    {
        name: "S.no",
        selector: (row, index) => index + 1,
    },
    {
        name: "Category",
        selector: (row) => (
            <InertiaLink href={`/expenses/${row.id}`}>
                {row.category}
            </InertiaLink>
        ),
    },
    {
        name: "Total Expenses",
        selector: (row) => row.total_expenses,
    },
    {
        name: "Action",
        selector: (row) => (
            <img src={EditPencil} alt="" onClick={handleApproveRejectChange} />
        ),
    },
];
