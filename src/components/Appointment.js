const Appointment = ({ appt }) => {
    return (
        <div className='card'>
            <div className='appointment-time'>{appt.date}, {appt.time}</div>
            <div id='patient-link'>{appt.name}</div>
            <div id='visit-type'>{appt.type}</div>
            <div className='links-to-patient-action' id='appt-notes'>Appointment Notes</div>
            <div className='links-to-patient-action' id='treatment-plan'>Diagnoses and Treatment Plan
            </div>
        </div>
    )
}

export default Appointment