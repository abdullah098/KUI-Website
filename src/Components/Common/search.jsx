import React from 'react';
import { Input, Space } from 'antd';

const Search = () => {

    const { Search } = Input;
    const onSearch = value => console.log(value);

    return (
        <>
            <Space direction="vertical">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                {/* <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} /> */}

            </Space>
        </>
    );
}

export default Search;