import React from "react";
import Layout from "../../layout/Index";
import Statistics from "./../../Components/Dashboard/Statistics";
import AmountGraph from "./../../Components/Dashboard/AmountGraph";
import FundUtilization from "../../Components/Dashboard/FundUtilization";
import CollegesCashFlowBarChart from "../../Components/Dashboard/CollegesCashFlowBarChart";
import RevenueFromTopCountries from "../../Components/Dashboard/RevenueFromTopCountries";
import Sponsors from "./../../Components/Dashboard/Sponsors";
import { Select } from "antd";

const Index = () => {
    const { Option } = Select;

    const handleChangeSession = (value) => {
        console.log(`selected ${value}`);
    };
    const handleChangeSemester = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <Layout currentPage={0}>
            <div className="dashboard-wrapper">
                <div className="d-flex align-items-center mb-30">
                    <h4 className="f-18 mb-0 fw-600">Dashboard</h4>

                    <div className="d-flex align-items-center ml-89">
                        <h4 className="f-14 mb-0 me-2">Session: </h4>
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

                    <div className="semester-select d-flex align-items-center ml-89">
                        <h4 className="f-14 mb-0 me-2">Semester: </h4>
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

                <div className="row">
                    <div className="col-4">
                        <Statistics />

                        <CollegesCashFlowBarChart />

                        <Sponsors />

                        <FundUtilization />
                    </div>
                    <div className="col-8">
                        <AmountGraph />

                        <RevenueFromTopCountries />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
