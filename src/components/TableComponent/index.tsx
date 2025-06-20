/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'
import { ProTable } from '@ant-design/pro-components'
import type { SearchConfig } from '@ant-design/pro-table/es/components/Form/FormRender'
import type { ReactNode } from 'react'
import type { TablePaginationConfig } from 'antd/es/table'
import type { TableRowSelection } from 'antd/es/table/interface'

type TableComponentProps = {
  rowKey: string;
  columns: any[];
  dataSource: any[];
  search?: false | SearchConfig;
  toolBarRender?: false | ((action: any, rows: any) => ReactNode[]);
  pagination?: false | TablePaginationConfig;
  rowSelection?: false | TableRowSelection;
};

const TableComponent = ({ columns, dataSource, rowKey, search, toolBarRender, pagination, rowSelection }: TableComponentProps) => {
  return (
    <ProTable
      rowKey={rowKey}
      rowSelection={rowSelection}
      search={search}
      toolBarRender={toolBarRender}
      pagination={pagination || { pageSize: 10, showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}` }}
      columns={columns}
      dataSource={dataSource}
      options={{
        search: false,
        density: false,
        fullScreen: false,
        setting: false,
        reload: false
      }}
    />
  )
}

export default TableComponent
