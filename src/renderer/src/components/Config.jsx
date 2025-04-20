import { useState } from 'react'
import Input from './elements/Input'
import TextArea from './elements/TextArea'
import Hr from './elements/Hr'

const initVeeder = {
  port: 10001,
  ip: '192.168.0.4',
  tank_offset: 0,
  model: 350
}

const initEmail = {
  time: ['06:00:00', '12:00:00'],
  receivers: ['kn.electrical.services@gmail.com']
}

const Config = ({ config, setConfig }) => {
  const [veederValid, setVeederValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [veederSettings, setVeederSettings] = useState(
    JSON.stringify(config.veeder || initVeeder, null, 2)
  )
  const [emailSettings, setEmailSettings] = useState(
    JSON.stringify(config.email || initEmail, null, 2)
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setConfig((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleVeeder = (e) => {
    const { value } = e.target
    setVeederSettings(value)
  }

  const handleVeederBlur = () => {
    console.log('blur')
    try {
      const parsedVeeder = JSON.parse(veederSettings)
      setVeederValid(true)
      setConfig((prev) => ({
        ...prev,
        veeder: parsedVeeder
      }))
      console.log('valid')
    } catch (error) {
      setVeederValid(false)
      console.log('not valid')
    }
  }

  const handleEmail = (e) => {
    const { value } = e.target
    setEmailSettings(value)
  }

  const handleEmailBlur = () => {
    console.log('blur')
    try {
      const parsedEmail = JSON.parse(emailSettings)
      setEmailValid(true)
      setConfig((prev) => ({
        ...prev,
        email: emailVeeder
      }))
      console.log('valid')
    } catch (error) {
      setEmailValid(false)
      console.log('not valid')
    }
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full overflow-scroll hide-scrollbar">
      <TextArea
        label="Email schedule settings:"
        valid={emailValid}
        value={emailSettings}
        onChange={handleEmail}
        name="email"
        type="text"
        rows={6}
        onBlur={handleEmailBlur}
        custom="w-[25em] hide-scrollbar overflow-scroll"
      />
      <Hr />
      <TextArea
        label="Veeder root settings:"
        valid={veederValid}
        value={veederSettings}
        onChange={handleVeeder}
        name="veeder"
        type="text"
        rows={6}
        onBlur={handleVeederBlur}
        custom="w-[25em]"
      />
      <div className="flex gap-4">
        <Input
          label="Id:"
          value={config.id}
          onChange={handleChange}
          name="id"
          type="number"
          placeholder={100}
          custom="w-[5em]"
        />
        <Input
          label="Process name:"
          value={config.process_name}
          onChange={handleChange}
          name="process_name"
          type="text"
          custom="w-[10em]"
        />
        <Input
          label="Site name:"
          value={config.name}
          onChange={handleChange}
          name="name"
          type="text"
        />
      </div>
    </div>
  )
}

export default Config
