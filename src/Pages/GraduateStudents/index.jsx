import React from 'react';
import { Select, Button, Input, Space, Table } from 'antd';

import SearchBar from '../../Components/Common/search';

import ExportSvg from '../../Assets/Icons/export.svg';

const GraduateStudents = () => {


    const { Search } = Input;
    const onSearch = value => console.log(value);


    // select college
    const { Option } = Select;
    const handleChange = (value) => {
        // console.log(`selected ${value}`);
    }
    const slect_college_data = [
        {
            id: '1',
            title: 'English',
        },
        {
            id: '2',
            title: 'Arabic',
        },
        {
            id: '3',
            title: 'Persian',
        }, {
            id: '4',
            title: 'Turkish',
        },
        {
            id: '5',
            title: 'Urdu',
        }
    ];



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
            render: Name => <a href="">{Name.name}</a>,
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
            <div className="graduate-students-wrapper">

                {/* landing name */}
                <div className="landing-name">
                    <h5 className="f-14 m-0">Studying Students</h5>
                </div>

                {/* main content  */}
                <div className="graduate-students-content">

                    {/* top bar select college */}
                    <div className="select-college mt-24">
                        <h3 className="f-14 mb-0 ">Select College</h3>
                        <Select defaultValue="English" style={{ width: 201 }} onChange={handleChange}>
                            {slect_college_data.map(item => {
                                return <Option key={item.id} value={item.title}>{item.title}</Option>
                            })}
                        </Select>
                    </div>

                    {/* table section */}
                    <div className="table-top-bar mt-24">

                        {/* top  bar */}
                        <div className="top-searchbar-filter d-flex justify-content-between">

                            {/* students enrolled in the program + filter  */}
                            <div className="student-graduated-fliter d-flex">
                                <h4 className="f-16 m-0">Students Enrolled: 15</h4>


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

                        {/* table content */}
                        <div className="graduated-students-table">
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
            </div>
        </>
    );
}

export default GraduateStudents;