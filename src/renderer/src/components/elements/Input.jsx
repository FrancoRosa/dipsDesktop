const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      <label c>{label}</label>
      <input
        className=" my-auto px-3 text-sm py-1 bg-slate-300 text-slate-800 dark:bg-lime-800 dark:hover:bg-lime-700  dark:active:bg-lime-600 dark: dark:text-lime-300 rounded-md"
        {...props}
      />
    </div>
  )
}

export default Input
