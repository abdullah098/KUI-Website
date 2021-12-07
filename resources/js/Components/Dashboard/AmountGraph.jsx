import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const AmountGraph = () => {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: "Page D",
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: "Page E",
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: "Page F",
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: "Page G",
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className="amount-graph-wrapper mb-24">
            <div className="primary-card-rounded">
                <div className="area-chart-header justify-content-between">
                    <h2 className="f-16 fw-500 mb-24">
                        Amount spent Yearly / Semester
                    </h2>

                    <div className="chart-legend">
                        <span className="mr-30">
                            <span className="indicator primary-indicator" />
                            Fall
                        </span>
                        <span>
                            <span className="indicator secondary-indicator" />
                            Spring
                        </span>
                    </div>
                </div>{" "}
                <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
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
                            <Tooltip />

                            <Line
                                type="linear"
                                dataKey="pv"
                                stroke="#343379"
                                dot={false}
                                activeDot={{
                                    r: 5,
                                    fill: "#ffffff",
                                    stroke: "#343379",
                                    strokeWidth: 1,
                                }}
                            />
                            <Line
                                dot={false}
                                activeDot={{
                                    r: 5,
                                    fill: "#ffffff",
                                    stroke: "#089752",
                                    strokeWidth: 1,
                                }}
                                type="linear"
                                dataKey="uv"
                                stroke="#089752"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AmountGraph;
