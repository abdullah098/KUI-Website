import React from 'react';
import { Input } from 'antd';
import SearchSvg from '../../Assets/Icons/search.svg';

const Search = () => {

    // const { Search } = Input;
    // const onSearch = value => console.log(value);

    return (
        <>
            <Input
                prefix={<img src={SearchSvg} alt="search" />}
            />

        </>
    );
}

export default Search;