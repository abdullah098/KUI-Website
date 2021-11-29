import React from 'react';
import { Link} from 'react-router-dom';
// import Navbar from '../../Layouts/Navbar';
// import Dashboard from '../Dashboard/index';
// import StudyingStudents from '../StudyingStudents/index';
// import GraduateStudents from '../GraduateStudents/index';
// import AcademicCalendar from '../AcademicCalendar/index';
// import StudentInfoAndGrading from '../StudentInfoGrading/index';
import { Button, Select, Form, Input } from 'antd';
import Logo from '../../Assets/logo.png';

const Login = () => {

    // language 
    const { Option } = Select;
    const handleLanguageChange = (value) => {
        console.log(`selected ${value}`);
    }

    // form 
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>

            <div className="login-wrapper">

                {/* language button  */}
                <div className="language-btn text-end">
                    <Select className="select-custom" defaultValue="En" style={{ width: 61 }} onChange={handleLanguageChange}>
                        <Option value="english">En</Option>
                        <Option value="ar">Ar</Option>
                    </Select>
                </div>



                {/* login  */}
                <div className="login-container border mx-auto">
                    <div className="login-content">

                        {/* logo  */}
                        <div className="login-logo">
                            <img src={Logo} alt="" />
                        </div>

                        {/* hr line */}
                        <div className="d-flex justify-content-between">
                            <hr />
                            <h4 className="f-20 fw-bold">Sponser Portal</h4>

                            <hr />
                        </div>

                        {/* login form  */}
                        <div className="login-form ">
                            <h4 className="f-14">Login</h4>
                            <p className="f-14 mb-24">Enter your credentials to get access</p>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <label htmlFor="">Email</label>
                                <Input />

                                <label className="mt-18" htmlFor="">Password</label>
                                <Input.Password />


                                <Link to="/dashboard">
                                    <Button className="login-submit" type="primary" htmlType="submit">
                                        Sign In
                                    </Button>
                                </Link>

                            </Form>
                        </div>

                        <div className="text-center">
                            <p className="f-12">for any help or query contact us admindep@kiu.org</p>

                        </div>

                    </div>

                </div>



                <div className="end-part mt-18">
                    <p className="f-12 text-center text-white">All rights reserved © Knowledge international University</p>
                    <div className="d-flex justify-content-end">
                        <div className="mr-87">
                            <h4 className="f-14">Website</h4>
                            <p className="f-14">www.kiu.org</p>
                        </div>
                        <div className="mr-42">
                            <h4 className="f-14">LMS portal</h4>
                            <p className="f-14">www.kiu/lms.org</p>
                        </div>
                    </div>
                </div>



            </div>


            {/* <Navbar />


            <main>
                <Switch>


                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/studying-students" component={StudyingStudents} />
                    <Route exact path="/graduate-students" component={GraduateStudents} />
                    <Route exact path="/academic-calender" component={AcademicCalendar} />
                    <Route exact path="/studying-students/:id" component={StudentInfoAndGrading} />

                    <Redirect exact from="/" to="/dashboard" component={Dashboard} />
                </Switch>
            </main> */}
        </>
    );
}

export default Login;