import React from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const RevenueFromTopCountries = () => {
    const data = [
        {
            name: "UK",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Pakistan",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "UK",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Inda",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Malaysia",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "UK",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "USA",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <div className="revenue-top-countries-wrapper">
            <div className="primary-card-rounded">
                <h2 className="f-16 fw-500 mb-18">
                    Revenue From Top 10 Countries
                </h2>

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={150}
                        height={40}
                        data={data}
                        layout="vertical"
                        barSize={17}
                        barCategoryGap={32}
                    >
                        <XAxis type="number" fontSize={10} />
                        <YAxis type="category" dataKey="name" fontSize={10} />
                        <Bar dataKey="uv" fill="#089752" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueFromTopCountries;
