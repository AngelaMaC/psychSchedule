const Title = ({ title }) => {

    return (
        <div className='app-title'>
            <h2>{title}</h2>
            <p>Today is {new Date().toLocaleString('default', { dateStyle: 'full', timeStyle: 'short' })}</p>
        </div>
    )
}

export default Title