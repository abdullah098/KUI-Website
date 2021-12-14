import React from "react";
import {
    PieChart,
    Pie,
    Sector,
    Cell,
    Legend,
    ResponsiveContainer,
} from "recharts";

const FundUtilization = () => {
    const data = [
        { name: "Salaries", value: 400 },
        { name: "Examination Center", value: 400 },
        { name: "Advertisment", value: 400 },
        { name: "Others", value: 400 },
    ];
    const COLORS = ["#27506D", "#089752", "#5F3379", "#1F6166"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="funds-pie-chart-wrapper">
            <div className="primary-card-rounded">
                <div className="pie-chart-header justify-content-between">
                    <h2 className="f-16 fw-500 mb-18 text-black">
                        Fund utilization
                    </h2>
                </div>

                <div className="pie-chart-container">
                    <div style={{ width: "100%", height: 170 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={800} height={400}>
                                <Pie
                                    data={data}
                                    cx={95}
                                    cy={80}
                                    innerRadius={35}
                                    outerRadius={80}
                                    label={renderCustomizedLabel}
                                    labelLine={false}
                                    fill="#8884d8"
                                    paddingAngle={1}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend
                                    verticalAlign="middle"
                                    align="right"
                                    layout="vertical"
                                    margin={{
                                        top: 0,
                                        left: 50,
                                        right: 0,
                                        bottom: 0,
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FundUtilization;
