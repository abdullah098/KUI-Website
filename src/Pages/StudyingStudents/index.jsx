import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'antd';
import ExportSvg from '../../Assets/Icons/export.svg';
import SearchBar from '../../Components/Common/search';
import Filter from '../../Components/Common/DropdownFilter';

const StudyingStudents = () => {



    // table data 
    // const { Column, ColumnGroup } = Table;
    const dataSource = [
        {
            s_no: '1',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '2',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '3',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '4',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '5',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '6',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '7',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '8',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },
        {
            s_no: '9',
            id: '0155',
            name: 'Muzamil Afridi',
            iqama_country: 'Saudi Arabia',
            college: 'English',
            scholorship: 'Full',
            country: 'Saudi Arabia',
            major: 'English',
            cumulative_avg: '102,231',
        },


    ];
    const columns = [
        {
            title: 'S.no',
            dataIndex: 's_no',
            key: 'S.no',
            align: 'center',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'ID',
        },
        {
            title: 'Name',
            // dataIndex: 'name',
            key: 'Name',
            render: student =>
                <Link to={`/studying-students/${student.id}`} dataSource={student}>
                    {student.name}
                </Link>
        },
        {
            title: 'Iqama Country',
            dataIndex: 'iqama_country',
            key: 'Iqama Country',
        },
        {
            title: 'College',
            dataIndex: 'college',
            key: 'College',
        },
        {
            title: 'Scholarship',
            dataIndex: 'scholorship',
            key: 'Scholarship',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'Country',
        },
        {
            title: 'Major',
            dataIndex: 'major',
            key: 'Major',
        },
        {
            title: 'Cumulative Avg',
            dataIndex: 'cumulative_avg',
            key: 'Cumulative Avg',
            align: 'right',
        }
    ];


    return (
        <>
            <div className="studying-students-wrapper">

                {/* landing name  */}
                <div className="landing-name">
                    <h5 className="f-14 m-0">Studying Students</h5>
                </div>

                {/* main content  */}
                <div className="studying-students-content">

                    {/* top bar  */}
                    <div className="search-function-top d-flex justify-content-between">

                        {/* students enrolled in the program + filter  */}
                        <div className="student-enroll-fliter d-flex">
                            <h4 className="f-16 mb-0 mr-30">Students Enrolled: 15</h4>
                            <Filter />

                        </div>

                        {/* export and searchbar  */}
                        <div className="search-export d-flex">
                            <Button className="me-2">
                                <img className="me-2" src={ExportSvg} alt="exp" />
                                Export
                            </Button>
                            <SearchBar />
                        </div>
                    </div>


                    {/* table  */}
                    <div className="studying-students-table">
                        <Table
                            dataSource={dataSource}
                            columns={columns}
                            pagination={{
                                pageSize: 7,
                                showTotal: (total, currentSize) =>
                                    `Showing: ${currentSize[1]} of ${total}`,
                                size: "small",
                                hideOnSinglePage: true,
                            }} />
                    </div>


                </div>


            </div>
        </>
    );
}

export default StudyingStudents;