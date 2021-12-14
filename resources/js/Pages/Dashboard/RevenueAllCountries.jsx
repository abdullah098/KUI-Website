import React from "react";
import Layout from "../../layout/Index";
import { Select } from "antd";
import RevenueFromAllCounriesBarGraph from "../../Components/Dashboard/RevenueFromAllCountriesBarGraph";

const RevenueAllCountries = () => {
    const { Option } = Select;

    // handle change session
    const handleChangeSession = (value) => {
        console.log(`selected ${value}`);
    };

    // handle chanege semester
    const handleChangeSemester = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <Layout currentPage={0}>
            <div className="dashboard-wrapper">
                <div className="d-flex align-items-center mb-30">
                    <h4 className="f-18 mb-0 fw-600 text-black">Countries</h4>

                    {/* select section  */}
                    <div className="d-flex align-items-center ml-89">
                        <h4 className="f-14 mb-0 me-2 text-black">Session: </h4>
                        <Select
                            defaultValue="2021"
                            style={{ width: 100 }}
                            onChange={handleChangeSession}
                            className="select-dropdown-custom"
                        >
                            <Option value="2021">2021</Option>
                            <Option value="2020">2020</Option>
                        </Select>
                    </div>

                    {/* select semester  */}
                    <div className="semester-select d-flex align-items-center ml-89">
                        <h4 className="f-14 mb-0 me-2 text-black">
                            Semester:{" "}
                        </h4>
                        <Select
                            defaultValue="Fall"
                            style={{ width: 100 }}
                            onChange={handleChangeSemester}
                            className="select-dropdown-custom"
                        >
                            <Option value="fall">Fall</Option>
                            <Option value="spring">Spring</Option>
                        </Select>
                    </div>
                </div>

                {/* Revenue From All Countries Bar Graph */}
                <div className="row">
                    <div className="col-12">
                        <RevenueFromAllCounriesBarGraph />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default RevenueAllCountries;
