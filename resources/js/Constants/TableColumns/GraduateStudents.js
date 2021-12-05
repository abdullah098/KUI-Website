import React from "react";

export const columns = [
    {
        name: "S.no",
        selector: (row, index) => index + 1,
    },
    {
        name: "ID",
        selector: (row) => row.id,
    },
    {
        name: "Name",
        selector: (row) => (
            <InertiaLink href={`/graduate-students/${row.id}`}>
                <u className="color-persian-blue fw-500 cursor-pointer">
                    {row.name}
                </u>
            </InertiaLink>
        ),
    },
    {
        name: "Iqama Country",
        selector: (row) => row.iqama_country,
    },
    {
        name: "College",
        selector: (row) => row.college,
    },
    {
        name: "Country",
        selector: (row) => row.country,
    },
    {
        name: "Major",
        selector: (row) => row.major,
    },
    {
        name: "Commutative Avg",
        selector: (row) => row.commutative_avg,
    },
];
