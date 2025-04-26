const Info = ({ location = { name: 'name', address: 'address' } }) => {
  const { name, address, lat, lng } = location
  return (
    <div className="my-4 text-center lg:text-left">
      <h3 className="text-gray-600 text-2xl font-bold dark:text-white">{name}</h3>
      <pre className="text-gray-600 dark:text-gray-100">{address}</pre>
    </div>
  )
}
export default Info
