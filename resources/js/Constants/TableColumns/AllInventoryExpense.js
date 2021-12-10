import React from "react";
import { Button } from "antd";
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
            <InertiaLink href={`/expenses/${row.id}`}>
                <Button ghost>
                    <img src={GreenEye} alt="" />
                </Button>
            </InertiaLink>
        ),
        center: true,
    },
];
