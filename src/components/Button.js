import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button type='button'
            onClick={onClick} value='submit' className='button simple-button' style={{ backgroundColor: color }}>{text}</button>
    )
}

export default Button

Button.defaultProps = {
    color: '#ffa17a'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}