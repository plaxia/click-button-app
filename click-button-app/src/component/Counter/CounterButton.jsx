import { PropTypes } from 'prop-types'



export default function CounterButton({ by, incrementMethod, decrementMetod }) {

    return (

        <div className="Counter">
            <div>
                <button className="counterButton" onClick={() => incrementMethod(by)}>+{by}</button>
                <button className="counterButton" onClick={() => decrementMetod(by)}>-{by}</button>
            </div>

        </div>
    )

}
CounterButton.propTypes = {
    by: PropTypes.number
}
CounterButton.defaultProps = {
    by: 1
}