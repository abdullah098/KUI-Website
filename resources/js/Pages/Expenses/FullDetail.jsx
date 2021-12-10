import React from "react";
import Layout from "../../Layout/Index";
import { Divider } from "antd";
import { InertiaLink } from "@inertiajs/inertia-react";
import ArrowBack from "../../Assets/icons/button-arrow-back.svg";

const Details = () => {
    return (
        <Layout currentPage={2}>
            <div className="payment-receipt-wrapper">
                <div className="payment-receipt-wrapper__header">
                    <InertiaLink href="" className="button-back">
                        <img src={ArrowBack} />
                        <span className="f-18 fw-600 color-secondary">
                            Back
                        </span>
                    </InertiaLink>

                    <Divider className="primary-divider" />
                    <div className="container-fluid p-0">
                        <h4 className="f-14 fw-500">Payment receipt</h4>
                        <div className="row">
                            <div className="col-2">
                                <img
                                    className="border img-fluid"
                                    src={ArrowBack}
                                    alt=""
                                />
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-3">
                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Expense ID
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            120348
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Payment date
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            12/12/2020
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            To Account No
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            PK230125697786
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Updated at
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            20-jan-2021
                                        </h4>
                                    </div>

                                    <div className="col-3">
                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Expense Category
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            Study
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Bank name
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            Allied Bank ltd
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Created by
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            John Doe
                                        </h4>
                                    </div>

                                    <div className="col-3">
                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Payment method
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            Bank
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Bank Branch
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            Bara Tower
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Created at
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            10-jan-2021
                                        </h4>
                                    </div>

                                    <div className="col-3">
                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Paid to
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            John Doe
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Bank Country
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            Pakistan
                                        </h4>

                                        <label
                                            className="f-12 fw-400"
                                            htmlFor="stident_id"
                                        >
                                            Updated by
                                        </label>
                                        <h4 className="mb-30 f-16 fw-400 text-black">
                                            John Doe
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider className="primary-divider" />
                </div>
            </div>
        </Layout>
    );
};

export default Details;
