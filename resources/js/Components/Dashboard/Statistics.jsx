import React from "react";
import Bars from "../../Assets/icons/bars.svg";
import IncreaseArrow from "../../Assets/icons/increaseArrow.svg";

const Statistics = () => {
    return (
        <div className="row statistics-wrapper mb-24">
            <div className="col-12">
                <div className="primary-card-rounded">
                    <h2 className="f-16 fw-500 mb-18">Finance</h2>
                    <div className="d-flex justify-content-between">
                        <img src={Bars} alt="" className="mr-30" />
                        <div className="f-12 fw-600 text-end">
                            Total
                            <span className="d-block color-mid-gray f-22 fw-600 f-14">
                                $1,000,000
                            </span>
                            <span className="color-success fw-300">
                                <img
                                    src={IncreaseArrow}
                                    alt="l"
                                    className="mr-5"
                                />{" "}
                                20%
                                <span className="color-mid-gray">
                                    {" "}
                                    Since last month
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-7">
                <div className="primary-card-rounded">
                    <h2 className="f-16 fw-500 mb-18">Amount</h2>

                    <div className="d-flex justify-content-between mx-4">
                        <div className="d-flex justify-content-center">
                            <img
                                src={IconDollarSymbol}
                                alt=""
                                className="mr-30"
                            />
                            <div className="f-18 fw-600">
                                258
                                <span className="d-block color-mid-gray fw-400 f-14">
                                    Total
                                </span>
                            </div>
                        </div>
                        <div className="vertical-divider" />
                        <div className="d-flex justify-content-center">
                            <img src={SaveMoney} alt="" className="mr-30" />
                            <div className="f-18 fw-600">
                                258
                                <span className="d-block color-mid-gray fw-400 f-14">
                                    Spent
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Statistics;
