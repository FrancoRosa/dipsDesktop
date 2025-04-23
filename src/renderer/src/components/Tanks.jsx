import PropTypes from 'prop-types'
import Clock from './Clock'

const Tanks = ({ dipsData = { data: 1 } }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full overflow-scroll hide-scrollbar">
      <Clock />
      <pre>{JSON.stringify(dipsData, null, 2)}</pre>
    </div>
  )
}

Tanks.propTypes = {
  dipsData: PropTypes.object
}

export default Tanks
