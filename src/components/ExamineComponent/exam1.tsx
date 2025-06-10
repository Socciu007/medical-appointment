/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'
import { Tree, Input } from 'antd'
import type { TreeDataNode } from 'antd'
import { useState } from 'react'
import TableComponent from '../TableComponent'
import ButtonComponent from '../ButtonComponent'
import minusIcon from '/assets/icons/icon-minus.svg'
import plusIcon from '/assets/icons/icon-pluswhite.svg'

const serviceData = [
  {
    code: 'XN.01',
    name: 'Tổng phân tích tế bào máu',
    price: 150000,
    package: true,
    quantity: 1,
    assign: true
  },
  {
    code: 'XN.02',
    name: 'Nhóm máu ABO',
    price: 105000,
    package: false,
    quantity: null,
    assign: true
  },
  {
    code: 'XN.03',
    name: 'Nhóm máu ABO(Rh+)',
    price: 105000,
    package: false,
    quantity: null,
    assign: true
  },
  {
    code: 'XN.04',
    name: 'Uric acid',
    price: 150000,
    package: false,
    quantity: null,
    assign: true
  },
  {
    code: 'XN.05',
    name: 'Glucose',
    price: 150000,
    package: false,
    quantity: null,
    assign: true
  },
  {
    code: 'XNHH',
    name: 'Xét nghiệm huyết học',
    price: null,
    package: false,
    quantity: null,
    assign: false
  },
  {
    code: 'XNSH',
    name: 'Xét nghiệm sinh hóa',
    price: 105000,
    package: true,
    quantity: 1,
    assign: false
  },
  {
    code: 'XN.04',
    name: 'Uric acid',
    price: 150000,
    package: false,
    quantity: 1,
    assign: false
  },
  {
    code: 'XN.05',
    name: 'Glucose',
    price: 150000,
    package: false,
    quantity: 1,
    assign: false
  }
]

const serviceColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
    render: (_: any, __: any, index: number) => index + 1
  },
  {
    title: 'Mã dịch vụ',
    dataIndex: 'code',
    key: 'code'
  },
  {
    title: 'Tên dịch vụ',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Đơn giá',
    dataIndex: 'price',
    key: 'price',
    render: (price: number) => {
      if (price === null) {
        return '-'
      }
      return price
    }
  },
  {
    title: 'Áp dụng gói',
    dataIndex: 'package',
    key: 'package',
    render: (_: any, record: any) => {
      if (record.package) {
        return 'x'
      }
      return '-'
    }
  },
  {
    title: 'Số lượng',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (quantity: number) => {
      if (quantity === null) {
        return '-'
      }
      return quantity
    }
  },
  {
    title: 'Thành tiền',
    dataIndex: 'total',
    key: 'total',
    render: (_: any, record: any) => {
      if (
        record.price === null ||
        record.quantity === null
      ) return '-'
      if (record.package === true) return 0
      return record.price * record.quantity
    }
  },
  {
    title: 'Chỉ định',
    dataIndex: 'assign',
    key: 'assign',
    width: 60,
    render: (_: any, record: any) => {
      if (record.assign) {
        return (
          <div className="assign-container">
            <img src={plusIcon} alt="plus" />
          </div>
        )
      }
      return (
        <div
          className="assign-container"
          style={{ backgroundColor: '#FF0B0B' }}
        >
          <img src={minusIcon} alt="minus" />
        </div>
      )
    }
  }
]

const Exam1 = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['0', '1', '2'])
  const [autoExpandParent, setAutoExpandParent] = useState(true)

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys)
    setAutoExpandParent(false)
  }

  const treeData: TreeDataNode[] = [
    {
      title: 'Gói chỉ định - Protocol',
      key: '0',
      children: [
        {
          title: 'Bộ 1',
          key: '0-0'
        },
        {
          title: 'Bộ 2',
          key: '0-1'
        },
        {
          title: 'Bộ 3',
          key: '0-2'
        },
        {
          title: 'Bộ 4',
          key: '0-3'
        }
      ]
    },
    {
      title: 'Bộ chỉ định mẫu',
      key: '1',
      children: [
        {
          title: 'Bộ chỉ định cơ bản',
          key: '1-0'
        },
        {
          title: 'Bộ chỉ định thủ thuật gây tê',
          key: '1-1'
        },
        {
          title: 'Bộ chỉ định cột sống',
          key: '1-2'
        },
        {
          title: 'Bộ chỉ định protocol đau đầu',
          key: '1-3'
        }
      ]
    },
    {
      title: 'Tất cả dịch vụ',
      key: '2',
      children: [
        {
          title: 'Khám bệnh',
          key: '2-0',
          children: [
            {
              title: 'Khám bệnh thường',
              key: '2-0-0'
            },
            {
              title: 'Khám giáo sư',
              key: '2-0-1'
            },
            {
              title: 'Tái khám',
              key: '2-0-2'
            }
          ]
        },
        {
          title: 'Xét nghiệm',
          key: '2-1'
        },
        {
          title: 'CĐHA - TDCN',
          key: '2-2'
        },
        {
          title: 'Thủ thuật',
          key: '2-3'
        },
        {
          title: 'Dịch vụ khác',
          key: '2-4'
        }
      ]
    }
  ]
  return (
    <div className="container-exam1">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Nhóm dịch vụ/Bộ chỉ định</h3>
        <Tree
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          treeData={treeData}
          showIcon={true}
        />
      </div>

      {/* Main Content */}
      <div className="content">
        <div className="service-header">
          <div className="search-input">
            <Input.Search placeholder="Tìm kiếm dịch vụ" />
          </div>
          <ButtonComponent
            title="Lưu vào bộ CD mẫu"
            color="#17C256"
            styleProps={{ width: '112px' }}
            onClick={() => {}}
          />
        </div>

        <div className="service-title">
          <h4>Tổng tiền đã sử dụng: 5.000.000</h4>
        </div>

        {/* Danh sách dịch vụ */}
        <TableComponent
          rowKey="id"
          columns={serviceColumns}
          dataSource={serviceData.filter(item => item.assign)}
          toolBarRender={false}
          search={false}
        />

        {/* Dịch vụ đã được chỉ định */}
        <div className="service-title">
          <h4>Dịch vụ đã được chỉ định</h4>
          <div className="total">
            Tổng tiền dịch vụ chỉ định của lượt khám: 300.000
          </div>
        </div>
        <TableComponent
          rowKey="id"
          columns={serviceColumns}
          dataSource={serviceData.filter(item => !item.assign)}
          toolBarRender={false}
          search={false}
        />
      </div>
    </div>
  )
}

export default Exam1
