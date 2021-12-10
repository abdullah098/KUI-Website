import React from "react";
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Cell,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const CollegesCashFlowBarChart = () => {
    const data = [
        {
            name: "English",
            uv: 200000,
            pv: 300000,
        },
        {
            name: "French",
            uv: 230236,
            pv: 300000,
        },
        {
            name: "Urdu",
            uv: 250000,
            pv: 300000,
        },
        {
            name: "Arabic",
            uv: 150000,
            pv: 300000,
        },
    ];

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip text-center">
                    <p className="label f-10 f-300">{`${label}`}</p>
                    <p className="label f-12">{`${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="colleges-chart-wrapper mb-24">
            <div className="primary-card-rounded">
                <div className="d-flex justify-content-between align-items-center mb-13">
                    <h2 className="f-16 fw-500">Colleges Cash Flow</h2>
                    <div className="text-start chart-legend f-10 fw-300">
                        <span>
                            <span className="indicator primary-indicator" />
                            Cash Inflow
                        </span>
                        <br />
                        <span>
                            <span className="indicator secondary-indicator" />
                            Cash Outflow
                        </span>
                    </div>
                </div>

                <div style={{ width: "100%", height: 230 }}>
                    <ResponsiveContainer>
                        <BarChart data={data} barGap={0}>
                            <CartesianGrid
                                vertical={false}
                                stroke="#EEEEEE"
                                strokeWidth={1}
                            />
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
                            <Tooltip content={<CustomTooltip />} />
                            {/* <Legend /> */}

                            <Bar barSize={20} dataKey="uv" fill="#36AA72">
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        strokeWidth={index === 2 ? 4 : 1}
                                    />
                                ))}
                            </Bar>
                            <Bar barSize={20} dataKey="pv" fill="#343379">
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
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

export default CollegesCashFlowBarChart;
