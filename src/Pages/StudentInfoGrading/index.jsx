import React from 'react';
import { Button } from 'antd';
import BackButtonArrow from '../../Assets/Icons/backButtonArrow.svg';
import GradingScale from '../../Components/Common/gradingScale';

const StudentInfoAndGrading = () => {


    const studentData = [
        {
            id: 1,
            name: 'John Doe',
            grade: 'A',
            email: 'abc@kui.com',
            phone: '1234567890',
            scholorship: 'Sibilig Concession',
            semester: '1st',
            cgpa: '3.53',
            major: 'Computer Science',
            department: 'Computer Science',
            college: 'KUI',
            educationLevel: 1
        }
    ];



    return (
        <>
            <div className="student-info-and-grading-wrapper">

                {/* bac button  */}
                <div className="back-button">
                    <Button className="back-btn f-18">
                        <img className="mr-14" src={BackButtonArrow} alt="" />
                        Back
                    </Button>
                </div>

                {/* student info */}
                <div className="student-info-wrapper mt-30">
                    <div className="student-info mt-27 d-flex justify-content-between">

                        {/* name email id  */}
                        <div className="email-id-name">
                            <h4 className="f-10 mb-0">{studentData[0].email}</h4>
                            <h3 className="f-14">{studentData[0].name}</h3>
                            <h4 className="f-14 mb-0">{`ID: ${studentData[0].id}`}</h4>
                        </div>

                        {/* scholorship semester cgpa  */}
                        <div className="scholorship-semester-cgpa d-flex">
                            <div className="scholorship  mr-25">
                                <h4 className="f-12">Scholorship</h4>
                                <p className="f-14 text-black fw-bold">{studentData[0].scholorship}</p>
                            </div>
                            <div className="semester mr-25">
                                <h4 className="f-12">Semester</h4>
                                <p className="f-14 text-black fw-bold">{studentData[0].semester}</p>
                            </div>
                            <div className="cgpa">
                                <h4 className="f-12">CGPA</h4>
                                <p className="f-14 text-black fw-bold">{studentData[0].cgpa}</p>
                            </div>
                        </div>


                    </div>

                    <hr />

                    {/* college department major */}
                    <div className="college-department-major d-flex justify-content-between">
                        {/* college  */}
                        <div className="college">
                            <h4 className="f-12 m-0">{`College: ${studentData[0].college}`}</h4>
                        </div>

                        {/* department  */}
                        <div className="department">
                            <h4 className="f-12 m-0">{`Department: ${studentData[0].department}`}</h4>
                        </div>

                        {/* major  */}
                        <div className="major ">
                            <h4 className="f-12 m-0">{`Major: ${studentData[0].major}`}</h4>
                        </div>
                    </div>

                </div>


                {/* result card  */}
                <div className="result-card-wrapper mt-30">
                    <h4 className="f-16 mb-15">Result Card</h4>

                    {/* qualification */}
                    <h4 className="f-12 mb-0 fw-bold">Qualification</h4> 

                    {/* collage department major educationLevel  */}
                    <div className="collage-department-educationlevel d-flex">

                        {/* collage department  */}
                        <div className="college-department">
                            <p className="f-11 mb-0 text-black">{`College: ${studentData[0].college}`}</p>
                            <p className="f-11 mb-0 text-black">{`Department: ${studentData[0].department}`}</p>
                        </div>

                        {/* major education level  */}
                        <div className="major-educationlevel ml-87">
                            <p className="f-11 mb-0 text-black">{`Major: ${studentData[0].major}`}</p>
                            <p className="f-11 mb-0 text-black">{`Education Level: ${studentData[0].educationLevel}`}</p>
                        </div>

                    </div>

                    {/* grading scale  */}
                    <div className="grading-scale mt-30">
                        <GradingScale />
                    </div>



                </div>



            </div>
        </>
    );
}

export default StudentInfoAndGrading;