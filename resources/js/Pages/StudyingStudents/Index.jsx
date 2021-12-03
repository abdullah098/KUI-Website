import React from "react";
import Layout from "../../layout/Index";
import DataTable from "./../../components/common/DataTable";

const Index = () => {
    const columns = [
        {
            name: "S.no",
            selector: (row, index) => index + 1,
            width: "100px",
        },
        {
            name: "Student ID",
            selector: (row) => row.student_id,
        },
        {
            name: "Full Name",
            selector: (row) => row.student_name,
        },
        {
            name: "Email Address",
            selector: (row) => row.student_email,
        },
        {
            name: "Country",
            selector: (row) => row.country,
        },
        {
            name: "Exam Center",
            selector: (row) => row.exam_center,
        },
    ];

    const data = [
        {
            id: 0,
            course_name: "Aqeedah 1 Section A",
            course_code: 15,
            semester_marks: 0,
            final_marks: 0,
        },
    ];
    return (
        <Layout currentPage={1}>
            <h1 className="f-14 fw-600 mb-20">Studying Students</h1>

            <DataTable columns={columns} data={data} pagination keyField="id" />
        </Layout>
    );
};

export default Index;
