/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProTable } from '@ant-design/pro-components'
import type { SearchConfig } from '@ant-design/pro-form/es/components/Submitter'
import type { ReactNode } from 'react'
import type { TablePaginationConfig } from 'antd/es/table'

type TableComponentProps = {
    rowKey: string
    columns: any[]
    dataSource: any[]
    search?: false | SearchConfig
    toolBarRender?: false | ((action: any, rows: any) => ReactNode[])
    pagination?: false | TablePaginationConfig
}

const TableComponent = ({ columns, dataSource, rowKey, toolBarRender, pagination }: TableComponentProps) => {
  return (
    <ProTable
      rowKey={rowKey}
      search={false}
      toolBarRender={toolBarRender}
      pagination={pagination}
      columns={columns}
      dataSource={dataSource}
    />
  )
}

export default TableComponent
