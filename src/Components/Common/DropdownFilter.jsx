import React from 'react';

import FilterSvg from '../../Assets/Icons/filterBtn.svg';
import { Menu, Button, Dropdown, Input } from 'antd';
import ArrowRight from '../../Assets/Icons/ArrowRight.svg';

const DropdownFilter = () => {


    const [visible, setVisible] = React.useState(false);

    const handleMenuClick = e => {
        if (e.key === '3') {
            setVisible(false);
        }

    };

    const handleVisibleChange = e => {
        console.log(e);
        setVisible(e);
    };
    const menu = (
        <Menu
            className="filter-dropdown-dropdown-menu"
            onClick={handleMenuClick}>

            <div className="filter-dropdown-content">

                <h4 className="f-14 mb-0">
                    CGPA Range
                </h4>

                {/* gpa from to  */}
                <div className="gpa d-flex justify-content-between mt-2">

                    <div>
                        <label htmlFor="">From</label> <br />
                        <Input className="input-from-to " />
                    </div>
                    <div>
                        <br />
                        <img src={ArrowRight} alt="" />
                    </div>
                    <div>
                        <label htmlFor="">To</label> <br />
                        <Input className="input-from-to " />
                    </div>

                </div>


                {/* scholorship  */}
                <div className="scholorship mt-20">
                    <label htmlFor="">Scholorship</label> <br />
                    <Input className=" " />
                </div>

                {/* country  */}
                <div className="country mt-20">
                    <label htmlFor="">Country</label> <br />
                    <Input className=" " />
                </div>

                {/* major  */}
                <div className="country mt-20">
                    <label htmlFor="">Major</label> <br />
                    <Input className=" " />
                </div>

                {/* cancle apply  */}
                <div className="cancle-apply mt-20 text-end">
                    <Button className="cancle">Cancle</Button>
                    <Button className="apply ml-15">Apply</Button>
                </div>


            </div>
        </Menu>
    );





    return (
        <>
            <Dropdown

                overlay={menu}
                onVisibleChange={handleVisibleChange}
                visible={visible}
                trigger={['click']}
            >
                <Button className="ant-dropdown-link filter-dropdown" onClick={e => e.preventDefault()}>
                    Filter
                    <img className="ms-3" src={FilterSvg} alt="" />
                </Button>
            </Dropdown>
        </>
    );
}

export default DropdownFilter;