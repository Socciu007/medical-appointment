/* eslint-disable @typescript-eslint/no-explicit-any */

import './style.scss'
import saveIcon from '/assets/icons/icon-save.svg'
import editIcon from '/assets/icons/icon-update.svg'
import deleteIcon from '/assets/icons/icon-delete.svg'
import HeaderComponent from '../../components/HeaderComponent'
import TableComponent from '../../components/TableComponent'
import ButtonComponent from '../../components/ButtonComponent'
import searchIcon from '/assets/icons/icon-search.svg'
import exportIcon from '/assets/icons/icon-excel.svg'
import { useEffect, useState } from 'react'
import { Form } from 'antd'
import patientRegisterService from '../../services/patientRegisterService'
import { useNavigate } from 'react-router-dom'

const patientColumns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    search: false,
    render: (_: any, __: any, index: number) => <div>{index + 1}</div>
  },
  {
    title: 'PID',
    dataIndex: 'pid',
    key: 'pid'
  },
  {
    title: 'Số BA mạn tính',
    dataIndex: 'number',
    search: false
  },
  {
    title: 'Mã hồ sơ',
    dataIndex: 'file_code',
    key: 'file_code'
  },
  {
    title: 'Họ tên',
    dataIndex: 'full_name',
    key: 'full_name'
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'birth_date',
    key: 'birth_date',
    valueType: 'date'
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    key: 'gender',
    render: (record: any) => (
      <div>{record.gender === 0 ? 'Nam' : 'Nữ'}</div>
    )
  },
  {
    title: 'SĐT',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'create_date',
    key: 'create_date',
    valueType: 'date',
    search: false
  },
  {
    title: 'Ngày tiếp nhận',
    dataIndex: 'receiverDate',
    valueType: 'date',
    search: false
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    search: false
  },
  {
    title: 'Loại',
    dataIndex: 'exam_type',
    key: 'exam_type'
  },
  {
    title: 'Nhóm khám',
    dataIndex: 'exam_group',
    key: 'exam_group'
  },
  {
    title: 'Bác sĩ khám chính',
    dataIndex: 'mainDoctor',
    search: false
  },
  {
    title: 'Phòng khám chính',
    dataIndex: 'mainRoom',
    search: false
  },
  {
    title: 'NV tiếp nhận',
    dataIndex: 'receiver',
    key: 'receiver'
  },
  {
    title: 'NV cập nhật',
    dataIndex: 'updater',
    search: false
  },
  {
    title: 'Ngày cập nhật',
    dataIndex: 'updatedAt',
    valueType: 'date',
    search: false
  },
  {
    title: 'Đã thu tiền',
    dataIndex: 'is_pay_before',
    search: false,
    render: (record: any) => (
      <div>{record.is_pay_before ? 'Đã thu' : 'Chưa thu'}</div>
    )
  },
  {
    title: 'Ghi chú',
    dataIndex: 'note',
    search: false
  },
  {
    title: 'Tác vụ',
    dataIndex: 'action',
    search: false,
    // width: 100,
    render: () => (
      <div className="action-container">
        <div className="action-item" key="edit">
          <img src={editIcon} alt="editable" />
        </div>
        <div className="action-item" key="delete">
          <img src={deleteIcon} alt="deletable" />
        </div>
      </div>
    )
  }
]

const PatientManager = () => {
  const [registerServices, setRegisterServices] = useState([])
  const [form] = Form.useForm()
  const navigate = useNavigate()

  // Fetch register services data by filter
  const fetchFilterRegisterServices = async (params: any) => {
    console.log('params', params)
    const response = await patientRegisterService.getFilterRegisterServices(
      params
    )
    console.log('response', response)
    setRegisterServices(response.data)
  }

  // Fetch register services data
  const fetchRegisterServices = async () => {
    const response = await patientRegisterService.getRegisterServices({
      date_filter: null
    })
    setRegisterServices(response.data)
  }

  useEffect(() => {
    fetchRegisterServices()
  }, [])

  // Handle add new patient
  const handleAddNewPatient = () => {
    localStorage.setItem('key-menu', '')
    navigate('/')
  }

  return (
    <div className="patient-manager-page">
      <div className="container">
        {/* Header */}
        <div className="container-header">
          <HeaderComponent title="Danh sách tiếp nhận" isShowActions={false} />
        </div>

        {/* Content */}
        <div className="container-content">
          <div className="container-content-header">
            <p>Tìm kiếm</p>
            <ButtonComponent
              color="#059669"
              title="Thêm"
              onClick={handleAddNewPatient}
              icon={saveIcon}
            />
          </div>
          <TableComponent
            rowKey="id"
            columns={patientColumns}
            rowSelection={{
              onChange: (selectedRowKeys, selectedRows) => {
                console.log(
                  `selectedRowKeys: ${selectedRowKeys}`,
                  'selectedRows: ',
                  selectedRows
                )
              }
            }}
            dataSource={registerServices}
            pagination={false}
            toolBarRender={() => [
              <ButtonComponent
                color="#10B981"
                title="Xuất dữ liệu"
                onClick={handleAddNewPatient}
                icon={exportIcon}
                styleProps={{ width: 100 }}
              />
            ]}
            search={{
              form,
              searchText: 'Tìm kiếm',
              resetText: 'Làm mới',
              className: 'search-form',
              collapsed: false,
              labelWidth: 100,
              collapseRender: false,
              optionRender: () => {
                return [
                  <ButtonComponent
                    color="#10B981"
                    title="Tìm kiếm"
                    icon={searchIcon}
                    styleProps={{ width: 100 }}
                    onClick={async () => {
                      const values = await form.getFieldsValue()
                      await fetchFilterRegisterServices(values)
                      await form.resetFields()
                      return
                    }}
                  />
                ]
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PatientManager
