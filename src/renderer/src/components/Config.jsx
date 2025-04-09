import { useState } from 'react'
import Input from './elements/Input'
import TextArea from './elements/TextArea'

const Config = ({ config, setConfig }) => {
  const [valid, setValid] = useState(true)
  const [commands, setCommands] = useState(JSON.stringify(config.commands, null, 2) || [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setConfig((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCommands = (e) => {
    const { value } = e.target
    setCommands(value)
  }

  const handleBlur = () => {
    console.log('blur')
    try {
      const parsedCommands = JSON.parse(commands)
      setValid(true)
      setConfig((prev) => ({
        ...prev,
        commands: parsedCommands
      }))
      console.log('valid')
    } catch (error) {
      setValid(false)
      console.log('not valid')
    }
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <Input label="IP" value={config.ip} onChange={handleChange} name="ip" type="text" />
      <Input label="Port:" value={config.port} onChange={handleChange} name="port" type="text" />
      <TextArea
        label="Commands:"
        valid={valid}
        value={commands}
        onChange={handleCommands}
        name="commands"
        type="text"
        rows={commands.split('\n').length + 1}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default Config
