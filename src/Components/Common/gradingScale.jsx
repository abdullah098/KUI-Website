import React from 'react';

const GradingScale = () => {


    const gradingScale = [
        {
            name: 'A+',
            grade: '95-100',
            points: '4-5',
            color: '#39EF6A'
        },
        {
            name: 'A',
            grade: '90-94',
            points: '3.75-4.75',
            color: '#39EF6A'
        },
        {
            name: 'B+',
            grade: '85-89',
            points: '3.5-4.5',
            color: '#B9EF39'
        },
        {
            name: 'B',
            grade: '80-84',
            points: '3-4',
            color: '#D4FB79'
        },
        {
            name: 'C+',
            grade: '75-79',
            points: '2.5-3.75',
            color: '#EAC100'
        },
        {
            name: 'C',
            grade: '70-74',
            points: '2-3',
            color: '#FBE26C'
        },
        {
            name: 'D+',
            grade: '65-69',
            points: '1.5-2.75',
            color: '#F8990B'
        },
        {
            name: 'D',
            grade: '60-64',
            points: '1-2',
            color: '#F5C071'
        },
        {
            name: 'D',
            grade: '0-59',
            points: '0-1',
            color: '#EF3939'
        },
    ];




    return (
        <>
            <div className="grading-system-wrapper d-flex">

                {/* grading scale grade points  */}
                <div className="grading-scale-points">
                    <h3 className="f-16 mb-0 fw-bold text-black">
                        Grade scale
                        <br /><span class="badge bg-white mt-8">cgpa</span>
                    </h3>
                    <hr className="m-0" />
                    <h2 className="f-11 mb-0 fw-bold text-black">Grade</h2>
                    <hr className="m-0" />
                    <h2 className="f-11 mb-0 fw-bold text-black">Points</h2>
                </div>

                {/* grading chart  */}

                {gradingScale.map((item, index) => {
                    return (
                        <div className="grading-chart" key={index}>
                            <h3 className="f-16 mb-0 fw-bold text-black text-center">
                                <span class="badge mb-8" style= {{background: item.color, color: item.color}} >cgpa</span><br />
                                {item.name}
                            </h3>

                            <hr className="m-0" />
                            <h2 className="f-11 mb-0 text-black text-center"> {item.grade} </h2>
                            <hr className="m-0" />
                            <h2 className="f-11 mb-0 text-black text-center"> {item.points} </h2>
                        </div>
                    )
                })}

            </div>
        </>
    );
}

export default GradingScale;