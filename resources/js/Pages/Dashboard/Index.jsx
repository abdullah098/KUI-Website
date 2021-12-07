import React from "react";
import Layout from "../../layout/Index";
import Statistics from "./../../Components/Dashboard/Statistics";
import AmountGraph from "./../../Components/Dashboard/AmountGraph";
import RevenueBarChart from "../../Components/Dashboard/RevenueBarChart";
import ScholarshipsProgramTable from "./../../Components/Dashboard/ScholarshipsProgramTable";
import CollegesBarChart from "./../../Components/Dashboard/CollegesBarChart";
import GenderAreaChart from "./../../Components/Dashboard/GenderAreaChart";

const Index = () => {
    return (
        <Layout currentPage={0}>
            <div className="dashboard-wrapper">
                <div className="row">
                    <div className="col-8">
                        <Statistics />

                        <AmountGraph />

                        <RevenueBarChart />
                    </div>
                    <div className="col-4">
                        <ScholarshipsProgramTable />

                        <CollegesBarChart />

                        <GenderAreaChart />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
