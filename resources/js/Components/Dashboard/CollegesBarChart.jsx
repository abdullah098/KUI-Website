import React from "react";
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Cell,
} from "recharts";

const CollegesBarChart = () => {
    const data = [
        {
            name: "English",
            uv: 4000,
        },
        {
            name: "French",
            uv: 3000,
        },
        {
            name: "Urdu",
            uv: 2000,
        },
        {
            name: "Arabic",
            uv: 2780,
        },
    ];

    const colors = ["#36AA72", "#5F3379", "#343379", "#1F6166"];

    return (
        <div className="colleges-chart-wrapper mb-24">
            <div className="primary-card-rounded">
                <h2 className="f-16 fw-500 mb-18">Colleges</h2>

                <div style={{ width: "100%", height: 230 }}>
                    <ResponsiveContainer>
                        <BarChart data={data}>
                            <XAxis
                                fontSize={10}
                                fontWeight={300}
                                dataKey="name"
                                strokeWidth={1}
                            />
                            <YAxis
                                fontSize={10}
                                fontWeight={300}
                                strokeWidth={1}
                            />
                            <Bar barSize={20} dataKey="uv" fill="#8884d8">
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={colors[index]}
                                        strokeWidth={index === 2 ? 4 : 1}
                                    />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default CollegesBarChart;
