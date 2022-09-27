import Title from '../components/Title'
import Appointment from '../components/Appointment'

const Appointments = ({ appointments }) => {

    return (
        <div>
            <Title title='Appointments' />
            {appointments.map((appt) => (
                <Appointment key={appt.id} appt={appt} />
            )
            )}
        </div>
    )
}

export default Appointments