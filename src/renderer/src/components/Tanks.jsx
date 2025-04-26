import PropTypes from 'prop-types'
import Clock from './Clock'
import Info from './Info'
import Latest from './Latest'

const Tanks = ({ location, lastRecord }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full overflow-scroll hide-scrollbar">
      <Clock />
      <div className="p-4">
        <Info location={location} />
        <div className="lg:w-[720px]">
          <Latest lastRecord={lastRecord} />
        </div>
      </div>
    </div>
  )
}

Tanks.propTypes = {
  dipsData: PropTypes.object
}

export default Tanks
