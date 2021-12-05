import React from "react";
import Sidebar from "../../../pages/Student/Layout/Sidebar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SemesterCard from "../../Student/ResultCards/SemesterCard";
import AcademicReportCard from "../../Student/ResultCards/AcademicReportCard";
import Export from "../../../assets/images/icons/Icon awesome-file-export.png";
import Print from "../../../assets/images/icons/Icon material-print.png";
import { message, Select } from "antd";

const { Option } = Select;

function ResultCardContent(props) {
    const Grades = [
        { grade: "A+", marks: "95-100", points: "95-100", fill: "#39EF6A" },
        { grade: "A", marks: "95-100", points: "95-100", fill: "#6CF69A" },
        { grade: "B+", marks: "95-100", points: "4-5", fill: "#B9EF39" },
        { grade: "B", marks: "95-100", points: "4-5", fill: "#D4FB79" },
        { grade: "C+", marks: "95-100", points: "4-5", fill: "#EAC100" },
        { grade: "C", marks: "95-100", points: "4-5", fill: "#FBE26C" },
        { grade: "D+", marks: "95-100", points: "4-5", fill: "#F5C071" },
        { grade: "D", marks: "95-100", points: "4-5", fill: "#FCEACF" },
        { grade: "F", marks: "95-100", points: "4-5", fill: "#EF3939" },
    ];

    function handleMenuClick(e) {
        message.info("Click on menu item.");
    }

    return (
        <div className="ml-26">
            {
                // page heading
            }
            <div className="f-18 fw-600 mb-10">Result Card</div>
            <p className="result-card-qualifation"> Qualifications</p>
            <div className="d-flex mb-0">
                <div className="mr-65">
                    <p className="result-card-college">
                        College:
                        <span className="ml-1">
                            College of Religion and Quranic Studies
                        </span>
                    </p>
                    <p className="result-card-department">
                        Department:{" "}
                        <span className="ml-1">Quranic Studies</span>
                    </p>
                </div>
                <div>
                    <p className="result-card-college-major">
                        Major: <span className="ml-1">Tafseer</span>
                    </p>
                    <p className="result-card-college-education">
                        Education Level: <span className="ml-1">1</span>
                    </p>
                </div>
            </div>
            <div className="student-result-card-wrapper">
                <div className="d-flex justify-content-between">
                    <div style={{ flex: 1 }}>
                        <p className="wrapper-table-heading">Grade scale</p>
                        <p className="wrapper-table-grade">Grade</p>
                        <p className="wrapper-table-points">Points</p>
                    </div>

                    {Grades.map((grade, index) => (
                        <div
                            key={index}
                            className="content-right text-center"
                            style={{ flex: 1 }}
                        >
                            <div className="d-flex justify-content-center">
                                <div
                                    className="grade-color"
                                    style={{
                                        backgroundColor: `${grade.fill}`,
                                    }}
                                ></div>
                            </div>
                            <p className="grade"> {grade.grade}</p>
                            <p className="marks"> {grade.marks}</p>
                            <p className="points"> {grade.points}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-between semester-result-card">
                <div>
                    <p className="result-card-show mb-7">Show</p>
                    <Select
                        suffixIcon={
                            <ArrowDropDownIcon className="select-arrow-down" />
                        }
                        defaultValue={0}
                        className="select-option-primary w-156"
                    >
                        <Option value={0}>All Semesters</Option>
                    </Select>
                </div>

                <div className="buttons-wrapper">
                    <button className="print-btn">
                        <img src={Print} className="mr-2" />
                        Print
                    </button>
                    <button className="export-btn">
                        <img src={Export} className="mr-2" />
                        Export as PDF
                    </button>
                </div>
            </div>
            <SemesterCard />
            <AcademicReportCard TableName="Reported academic record 2009/2010 Fall Semester" />
        </div>
    );
}

export default ResultCardContent;
