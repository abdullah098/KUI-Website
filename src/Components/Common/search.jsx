import React from 'react';
import { Input, Space } from 'antd';
import SearchSvg from '../../Assets/Icons/search.svg';

const Search = () => {

    const { Search } = Input;
    const onSearch = value => console.log(value);

    return (
        <>
            <Space direction="vertical">
                <Input 
                    prefix={ <img src={SearchSvg} ></img> }
                />

            </Space>
        </>
    );
}

export default Search;