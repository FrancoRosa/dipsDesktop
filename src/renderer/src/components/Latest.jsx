import { formatTime } from '../js/helpers'
import Inventory from './Inventory'

const Latest = ({ lastRecord = [] }) => {
  const info = lastRecord.length > 0 ? true : false
  const update = info ? lastRecord[0].updated_at : null
  const tanks = info ? lastRecord.sort((a, b) => a.tank - b.tank) : []
  const diff = info ? Date.now() - new Date(update).getTime() : 0

  const getColor = (diff) => {
    const diffSec = diff / 1000
    const diffMin = diffSec / 60
    if (diffMin <= 10) return 'text-green-700'
    if (diffMin > 10 && diffMin <= 30) return 'text-orange-800'
    return 'text-red-700'
  }
  return (
    <div>
      {info ? (
        <div>
          <p className="text-gray-700 lg:text-right text-center font-semibold dark:text-gray-300">
            Last Update:{' '}
            <span className={`${getColor(diff)} font-mono dark:text-green-500`}>
              {formatTime(update)}
            </span>
          </p>
          <div className="lg:flex lg:flex-wrap gap-4 lg:w-[730px]">
            {tanks.map((t, i) => (
              <Inventory tank={t} key={i} setView={setView} />
            ))}
          </div>
        </div>
      ) : (
        <p className="my-32 font-semibold text-gray-100 dark:text-gray-500 text-center">
          There are no records available
        </p>
      )}
    </div>
  )
}
export default Latest
