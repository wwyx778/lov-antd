import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Input, Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { Hello, LovTable } from './components';

import 'antd/dist/antd.css';
import './index.less';

export interface LovProps {
  title?: string;
  dataSource?: any[];
  columns?: any[];
}

const Lov = (props: LovProps) => {
  const { title } = props;
  const [modal, contextHolder] = Modal.useModal();

  const onOpen = () => {
    // 
    const modalInstance = modal.info({
      title,
      content: (
        <LovTable />
      )
    });
  };

  return (
    <>
      {contextHolder}
      <Input
        placeholder="Enter your username"
        suffix={<Button type="link" onClick={onOpen} icon={<SearchOutlined />} />}
      />
    </>
  );
};

export default Lov;
