import React from "react";
import Layout from "../../layout/Index";
import DataTable from "./../../components/common/DataTable";
import FormInput from "./../../Components/Common/Antd/FormInput";
import ExportDropdown from "../../Components/Common/ExportDropdown";
import { columns } from "./../../Constants/TableColumns/StudyingStudents";

const Index = () => {
    const data = [
        {
            id: 0,
            name: "Muzamil Afirid",
            iqama_country: "Iqama Arabia",
            college: "English",
            scholarship: "Full",
            country: "Saudi Arabia",
            major: "Islamic Sharia",
            commutative_avg: 2.3,
        },
    ];

    return (
        <Layout currentPage={1}>
            <h1 className="f-14 fw-600 mb-20">Studying Students</h1>

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
                                    Showing enrolled students :
                                    <span className="mx-1">16</span>
                                </h2>
                            </div>

                            <div className="d-flex align-items-center">
                                <ExportDropdown className="mr-20" />
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
