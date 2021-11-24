import React from 'react';
import { ReactComponent as PersonCap } from '../../Assets/Icons/Student-with-Cap.svg';
import { ReactComponent as DollarSign } from '../../Assets/Icons/dollar-symbol.svg';
import { ReactComponent as SaveMoney } from '../../Assets/Icons/save-money.svg';


const Dashboard = () => {


    const scholorship_program_data = [
        {
            program: "Demo",
            students: "10",
            total_amount: "1,502,123",
            amount_spend: "152,212"
        },
        {
            program: "Demo",
            students: "10",
            total_amount: "1,502,123",
            amount_spend: "152,212"
        },
        {
            program: "Demo",
            students: "10",
            total_amount: "1,502,123",
            amount_spend: "152,212"
        },
        {
            program: "Demo",
            students: "10",
            total_amount: "1,502,123",
            amount_spend: "152,212"
        },
        {
            program: "Demo",
            students: "10",
            total_amount: "1,502,123",
            amount_spend: "152,212"
        }
    ]


    return (
        <>
            <div className="dashboard-wrapper">
                <div className="landing-name">
                    <h5 className="f-14 m-0">Dashboard</h5>
                </div>

                <div className="dashboard-content container-fluid mt-3">







                    <div className="student-amount-schoprg row">

                        {/* left side  */}
                        <div className="col-9">
                            {/* upper row cards  */}
                            <div className="row">

                                <div className="student-card col-3 border">
                                    <h4 className="f-16 mb-23">Students</h4>

                                    <div className="d-flex justify-content-center">
                                        <div className="mr-35">
                                            <span>
                                                <PersonCap />
                                            </span>
                                        </div>
                                        <div className="num-total">
                                            <h5 className="f-18">258</h5>
                                            <p className="f-14">Total</p>
                                        </div>
                                    </div>

                                </div>



                                <div className="middle-card-wraper col-9">

                                    <div className="amount-card d-flex">
                                        {/* middle left  */}
                                        <div className="col-5">
                                            <h4 className="f-16 mb-23">Amount</h4>

                                            <div className="d-flex justify-content-center">
                                                <div className="mr-35">
                                                    <span>
                                                        <DollarSign />
                                                    </span>
                                                </div>
                                                <div className="num-total">
                                                    <h5 className="f-18">258</h5>
                                                    <p className="f-14">Total</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* middle center */}
                                        <div className="col-2">
                                            <hr />
                                        </div>

                                        {/* middle right */}
                                        <div className="col-5">
                                            {/* <h4 className="f-16 mb-23"> </h4> */}

                                            <div className="d-flex justify-content-center mt-42">
                                                <div className="mr-35">
                                                    <span>
                                                        <SaveMoney />
                                                    </span>
                                                </div>
                                                <div className="num-total">
                                                    <h5 className="f-18">258</h5>
                                                    <p className="f-14">Total</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* 2nd row chart  */}
                            <div className="row amount-spend-wrapper">
                                <div className="amount-spend-graph border">
                                    Chart
                                </div>
                            </div>

                            {/* 3rd row  bar chart  */}
                            <div className="row revnew-top-10-wrapper">
                                <div className="revnew-top-10-chart border">
                                    Chart
                                </div>
                            </div>

                        </div>
                        {/* -------------------------------------- */}


                        {/* right screen card  */}
                        <div className="right-screen-row col-3 p-0">

                            <div className="scholorship-prog card border border-danger">
                                <h2 className="f-16 p-0 border card-header bg-white">Scholarship Program</h2>


                                <div className="table-sch row card-body p-0">
                                    <div className="table-scholorship">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="f-10">Program</th>
                                                    <th className="f-10 text-center">Students</th>
                                                    <th className="f-10 text-center">Total Amount</th>
                                                    <th className="f-10 text-center">Amount Spend</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {scholorship_program_data.map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="f-10">{data.program}</td>
                                                            <td className="f-10 text-center">{data.students}</td>
                                                            <td className="f-10 text-center">{data.total_amount}</td>
                                                            <td className="f-10 text-center">{data.amount_spend}</td>
                                                        </tr>
                                                    )
                                                })}

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>

                            <div className="collages">
                                colleges
                            </div>

                            <div className="gender-prop">
                                colleges
                            </div>



                        </div>



                    </div>






                </div>

            </div>
        </>
    );
}

export default Dashboard;