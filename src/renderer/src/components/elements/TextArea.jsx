const TextArea = ({ label, valid = false, ...props }) => {
  return (
    <div className="flex flex-col">
      <label c>{label}</label>
      <textarea
        className={`my-auto px-3 text-sm py-1 bg-slate-300 
          text-slate-800 dark:bg-lime-800 
          dark: dark:text-lime-300 rounded-md 
          ${valid ? 'dark:bg-lime-800' : 'dark:bg-red-900'}
          `}
        {...props}
      />
    </div>
  )
}

export default TextArea
