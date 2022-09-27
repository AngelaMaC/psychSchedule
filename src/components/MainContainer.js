import Appointments from '../routes/Appointments'
import { useState } from 'react'

const MainContainer = () => {
    const [appointments, setAppt] = useState(
        [
            {
                id: 1,
                name: "Jane Doe",
                type: "Individual Therapy",
                date: "4/15/2022",
                time: "1:00 PM",
                cancelled: false
            },
            {
                id: 2,
                name: "Jim Bob",
                type: "Individual Therapy",
                date: "4/15/2022",
                time: "1:00 PM",
                cancelled: false
            },
            {
                id: 3,
                name: "Barney Jo",
                type: "Individual Therapy",
                date: "4/15/2022",
                time: "1:00 PM",
                cancelled: false
            },

        ])


    // const onClick = () => {
    //     console.log('Test Click')
    // }
    return (
        <div className='main-container'>
            <Appointments appointments={appointments} />
        </div>
    )
}

export default MainContainer