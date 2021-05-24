import React from 'react';
import { Table } from 'antd';

export interface LovTableProps {
  tableProps?: any;
  dataSource?: any[];
  columns?: any[];
}

const LovTable = (props: LovTableProps) => {
  const { tableProps, dataSource, columns } = props;
  const thisProps = { ...tableProps, dataSource, columns };
  return <Table {...thisProps} />;
};

export default LovTable;
