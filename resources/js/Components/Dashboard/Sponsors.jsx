import React from "react";
import IncreaseArrow from "../../Assets/icons/increaseArrow.svg";

const Sponsors = () => {
    return (
        <>
            <div className="sponcors-wrapper mb-24">
                <div className="primary-card-rounded">
                    <div className="sponcors-card-header justify-content-between border-bottom-1">
                        <h2 className="f-16 fw-500 text-black">Sponsors</h2>
                    </div>

                    <div
                        className="sponcors-card-body"
                        style={{ width: "100%" }}
                    >
                        <div className="total-sponsors d-flex justify-content-between align-items-center">
                            <h4 className="f-14">Total Sponsors</h4>
                            <div className="text-end">
                                <span className="f-21 fw-500">45</span>
                                <br />
                                <span className="f-10 color-success">
                                    <img src={IncreaseArrow} alt="" /> 22%
                                    <span className="color-mid-gray">
                                        {" "}
                                        Since last month
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="total-sponsors d-flex justify-content-between align-items-center">
                            <h4 className="f-14">Sponsors Fund</h4>
                            <div className="text-end">
                                <span className="f-16 fw-500">$4,531,123</span>
                                <br />
                                <span className="f-12">Spent $150,230</span>
                            </div>
                        </div>

                        <div className="total-sponsors d-flex justify-content-between align-items-center">
                            <h4 className="f-14">Scholarship Students</h4>
                            <div className="text-end">
                                <span className="f-16 fw-500">150</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sponsors;
