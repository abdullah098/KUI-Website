import React from 'react';

const AcademicCalendar = () => {
    return ( 
        <>
            <div className="academic-calendae-wrapper">

                {/* landing name  */}
                <div className="landing-name">
                    <h5 className="f-18 mb-0">Academic Calendar</h5>
                    <p className="f-14">Semester dates for the year 2021</p>
                </div>

                {/* main content  */}
                <div className="academic-calendar-content mt-50">
                    <h4 className="f-14">
                        Semester start date
                        <span className="ml-60">12/05/2021</span>
                    </h4>
                    <hr />
                    <h4 className="f-14">
                        Semester end date
                        <span className="ml-60">12/05/2021</span>
                    </h4>
                </div>

            </div>
        </>
     );
}
 
export default AcademicCalendar;