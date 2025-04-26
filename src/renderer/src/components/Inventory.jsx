import Drawing from './Drawing'
import { liquidColors, products } from '../js/helpers'

const Inventory = ({ tank }) => {
  const {
    tank: id,
    product_id,
    volume,
    tc_volume,
    ullage,
    height,
    water,
    temp,
    capacity = 1
  } = tank
  const product = products(product_id)

  return (
    <div className="border-gray-300 border p-2 m-4 lg:m-0 cursor-pointer ">
      <h1 className="font-semibold lg:text-xl text-md capitalize text-gray-700 dark:text-gray-200">
        Tank {id}: {product}
      </h1>
      <div className="flex justify-around">
        <Drawing part={volume} all={capacity} color={liquidColors(product || '')} />
        <table className="lg:text-sm text-xs dark:text-gray-200">
          <tbody>
            <tr className="border-gray-200 border-b">
              <td>Volume</td>
              <td className="text-right">
                {volume} / {capacity}
              </td>
              <td>L</td>
            </tr>

            <tr className="border-gray-200 border-b">
              <td>TC Volume</td>
              <td className="text-right">{tc_volume}</td>
              <td>L</td>
            </tr>
            <tr className="border-gray-200 border-b">
              <td>Fuel height</td>
              <td className="text-right">{height}</td>
              <td>mm</td>
            </tr>
            <tr className="border-gray-200 border-b">
              <td>90% Ullage</td>
              <td className="text-right">{ullage}</td>
              <td>L</td>
            </tr>
            <tr className="">
              <td>Temperature</td>
              <td className="text-right">{temp.toFixed(2)}</td>
              <td>°C</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Inventory
