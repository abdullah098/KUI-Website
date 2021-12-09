import React from "react";
import Layout from "../../layout/Index";
import Statistics from "./../../Components/Dashboard/Statistics";
import AmountGraph from "./../../Components/Dashboard/AmountGraph";
import FundUtilization from "../../Components/Dashboard/FundUtilization";
import CollegesCashFlowBarChart from "../../Components/Dashboard/CollegesCashFlowBarChart";
import RevenueFromTopCountries from "../../Components/Dashboard/RevenueFromTopCountries";
import Sponsors from "./../../Components/Dashboard/Sponsors";

const Index = () => {
    return (
        <Layout currentPage={0}>
            <div className="dashboard-wrapper">
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
