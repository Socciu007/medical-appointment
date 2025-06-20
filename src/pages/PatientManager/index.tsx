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
import infoIcon from '/assets/icons/icon-info.svg'
import { useEffect, useState } from 'react'
import { Form } from 'antd'
import patientRegisterService from '../../services/patientRegisterService'
import { useNavigate } from 'react-router-dom'
import { Spin } from 'antd'
import * as XLSX from 'xlsx'

const PatientManager = () => {
  const [registerServices, setRegisterServices] = useState([])
  const [selectedRows, setSelectedRows] = useState<any[]>([])
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Fetch register services data by filter
  const fetchFilterRegisterServices = async (params: any) => {
    setIsLoading(true)
    const response = await patientRegisterService.getFilterRegisterServices(
      params
    )
    setRegisterServices(response.data)
    setIsLoading(false)
  }

  // Fetch register services data
  const fetchRegisterServices = async () => {
    const response = await patientRegisterService.getRegisterServices({
      date_filter: null
    })
    if (response?.data) {
      setRegisterServices(response?.data)
    }
  }

  useEffect(() => {
    fetchRegisterServices()
  }, [])

  // Handle add new patient
  const handleAddNewPatient = () => {
    localStorage.setItem('key-menu', '')
    navigate('/')
  }

  // Handle navigate to patient information
  const handleNavigatePatient = (id: string) => {
    navigate(`/patients/${id}`)
  }

  // Patient columns
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
      valueType: 'select',
      valueEnum: {
        0: {
          text: 'Nữ'
        },
        1: {
          text: 'Nam'
        }
      },
      render: (_: any, record: any) => {
        return <div>{record.gender === 1 ? 'Nam' : 'Nữ'}</div>
      }
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
      dataIndex: 'full_address',
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
      render: (_: any, record: any) => {
        return (
          <div className="action-container">
            <div
              className="action-item"
              key="view"
              onClick={() => handleNavigatePatient(record?.patient_id)}
            >
              <img src={infoIcon} alt="viewable" />
            </div>
            <div className="action-item" key="edit">
              <img src={editIcon} alt="editable" />
            </div>
            <div className="action-item" key="delete">
              <img src={deleteIcon} alt="deletable" />
            </div>
          </div>
        )
      }
    }
  ]

  // Handle export data
  const handleExportData = () => {
    const dataExport = selectedRows.map((row, index) => {
      return {
        STT: index + 1,
        PID: row?.pid,
        'Họ tên': row?.full_name,
        'Ngày sinh': row?.birth_date,
        'Giới tính': row?.gender === 1 ? 'Nam' : 'Nữ',
        'SĐT': row?.phone,
        'Địa chỉ': row?.full_address,
        'Ngày tạo': row?.create_date,
        'Ngày tiếp nhận': row?.receiverDate,
        'Ngày cập nhật': row?.updatedAt,
        'Đã thu tiền': row?.is_pay_before ? 'Đã thu' : 'Chưa thu',
        'Bác sĩ khám chính': row?.mainDoctor,
        'Phòng khám chính': row?.mainRoom,
        'NV tiếp nhận': row?.receiver,
        'NV cập nhật': row?.updater,
        'Ghi chú': row?.note
      }
    })
    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(dataExport)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
    XLSX.writeFile(workbook, 'Danh sách tiếp nhận.xlsx')
    setSelectedRows([])
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
          { !isLoading ? (
            <TableComponent
              rowKey="id"
              columns={patientColumns}
              rowSelection={{
                onChange: (_, selectedRows) => setSelectedRows(selectedRows)
              }}
              dataSource={registerServices}
              pagination={false}
              toolBarRender={() => [
                <ButtonComponent
                  color="#10B981"
                  title="Xuất dữ liệu"
                  onClick={() => handleExportData()}
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
          ) : (
            <div className="loading-container"><Spin /></div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PatientManager
