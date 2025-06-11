import InputComponent from '../InputComponent'
import SelectComponent from '../SelectComponent'
import './style.scss'
import { ProForm, ProFormCheckbox } from '@ant-design/pro-form'
import plusIcon from '/assets/icons/icon-pluswhite.svg'
import minusIcon from '/assets/icons/icon-minus.svg'
import SelectDatePicker from '../SelectDatePicker'

const ExamCLS = () => {
  return (
    <ProForm
      layout="horizontal"
      labelCol={{ span: 4 }}
      submitter={false}
    >
      <InputComponent name="cls" label="Chuẩn đoán xác định" />
      <div className="info-examine-content-right-btn">
        <div className="more-item">
          <p>ICD ban đầu:</p>
          <div className="more-item-input">
            <input type="text" name="icd" />
            <input type="text" name="icd" />
          </div>
          <button style={{ backgroundColor: '#22C55E' }}>
            <img src={plusIcon} alt="plus" />
          </button>
        </div>
        <div className="more-item">
          <p></p>
          <div className="more-item-input">
            <input type="text" name="icd" />
            <input type="text" name="icd" />
          </div>
          <button style={{ backgroundColor: '#FF0000' }}>
            <img src={minusIcon} alt="minus" />
          </button>
        </div>
        <div className="more-item">
          <p></p>
          <div className="more-item-input">
            <input type="text" name="icd" />
            <input type="text" name="icd" />
          </div>
          <button style={{ backgroundColor: '#FF0000' }}>
            <img src={minusIcon} alt="minus" />
          </button>
        </div>
      </div>
      <InputComponent
        name="consult"
        label="Tư vấn"
      />
      <InputComponent name="conclusion" label="Kết luận" />
      <SelectComponent width={200} name="direction" label="Hướng xử lý" options={[{ label: 'Ra về - kê đơn', value: 'go-home' }, { label: 'Nhập viện', value: 'go-hospital' }]} placeholder="Chọn hướng xử lý" />
      <div className="more-item">
        <p/>
        <div className="more-item-checkbox">
          <div className="is_revisit">
            <ProFormCheckbox name="is_revisit" />
            <p>Hẹn tái khám</p>
          </div>
          <SelectDatePicker name="date" label="Ngày hẹn tái khám" placeholder="Chọn ngày" width={280} />
        </div>
      </div>
    </ProForm>
  )
}

export default ExamCLS