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

export default RevenueBarChart;
