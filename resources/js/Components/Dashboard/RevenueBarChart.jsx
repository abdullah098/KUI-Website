import React from "react";

const RevenueBarChart = () => {
    return (
        <div className="revenue-bar-chart-wrapper">
            <div className="primary-card-rounded">
                <div className="bar-chart-header justify-content-between">
                    <h2 className="f-16 fw-500 mb-18">
                        Revenue From Top 10 Countries
                    </h2>

                    <u className="color-secondary f-12 cursor-pointer">
                        View all
                    </u>
                </div>
                <div style={{ width: "100%", height: 230 }}></div>
            </div>
        </div>
    );
};

export default RevenueBarChart;
