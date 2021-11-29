import React from 'react';
import { Table } from 'antd';


const ResultCard = () => {


    // previous sem table data
    const previous_sem_data_Source = [
        {
            key: '1',
            course_name: 'المدخل لعلوم الحديث الشريف',
            course_code: '10000201',
            division: 'First',
            credits: '3',
            gpa: '3.00',
            grade: 'F',

        },
        {
            key: '2',
            course_name: 'المدخل لعلوم الحديث الشريف',
            course_code: '10000201',
            division: 'First',
            credits: '3',
            gpa: '3.00',
            grade: 'F',
        },
        {
            key: '3',
            course_name: 'المدخل لعلوم الحديث الشريف',
            course_code: '10000201',
            division: 'First',
            credits: '3',
            gpa: '3.00',
            grade: 'F',
        },
        {
            key: '4',
            course_name: 'المدخل لعلوم الحديث الشريف',
            course_code: '10000201',
            division: 'First',
            credits: '3',
            gpa: '3.00',
            grade: 'F',
        },
        {
            key: '5',
            course_name: 'المدخل لعلوم الحديث الشريف',
            course_code: '10000201',
            division: 'First',
            credits: '3',
            gpa: '3.00',
            grade: 'F',
        },

    ];
    const previous_Sem_columns = [
        {
            title: 'Course code',
            dataIndex: 'course_code',
            key: 'course_code',
        },
        {
            title: 'Course Name',
            dataIndex: 'course_name',
            key: 'course_name',
        },
        {
            title: 'Division',
            dataIndex: 'division',
            key: 'division',
        },
        {
            title: 'Credits',
            dataIndex: 'credits',
            key: 'credits',
        },
        {
            title: 'GPA',
            dataIndex: 'gpa',
            key: 'created',
        },
        {
            title: 'Grade',
            // dataIndex: 'grade',
            render: (data) => <div className="d-flex justify-content-center">

                <div> {data.grade} </div>
                <div className="bg-danger">aa</div>
            </div>,
            key: 'updated',
            align: 'center'
        },
    ];


    // result card data
    const result_data_Source = [
        {
            key: '1',
            credits: 'Quaterly',
            registered: ' 17',
            passed: '0',
            score: '19',
            gpa: '19',
            average: '57%'

        }
    ];
    const result_data_columns = [
        {
            title: 'Credits',
            dataIndex: 'credits',
            key: 'credits',
        },
        {
            title: 'Registered',
            dataIndex: 'registered',
            key: 'registered',
        },
        {
            title: 'Passed',
            dataIndex: 'passed',
            key: 'passed',
        },
        {
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'GPA',
            dataIndex: 'gpa',
            key: 'gpa',
        },
        {
            title: 'Average',
            dataIndex: 'average',
            key: 'average',
        },
    ];




    return (
        <>
            <Table dataSource={previous_sem_data_Source} columns={previous_Sem_columns} pagination={false} />
            <Table dataSource={result_data_Source} columns={result_data_columns} pagination={false} />

        </>
    );
}

export default ResultCard;