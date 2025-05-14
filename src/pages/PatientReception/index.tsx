import HeaderComponent from '../../components/HeaderComponent'

const PatientReception = () => {
  return (
    <div className="patient-reception-page">
      <div className="container">
        <div className="container-header">
          <HeaderComponent title="Tiếp nhận" isShowActions={true} />
        </div>
      </div>
    </div>
  )
}

export default PatientReception
