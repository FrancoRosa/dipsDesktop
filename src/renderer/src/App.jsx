import { useEffect, useRef, useState } from 'react'
import Config from './components/Config'
import useLocal from './js/storage'
import Navigation from './components/Navigation'
import Button from './components/elements/Button'

const initConfig = {
  ip: '192.168.1.4',
  port: '10000',
  commands: ['\x01I5P100', '\x01I60100', '\x01I70100', '\x01I62200', '\x0162300']
}
// const initConfig = {
//   ip: 'telehack.com',
//   port: '23',
//   commands: ['date', 'uptime']
// }

function App() {
  const [page, setPage] = useState('main') //main, config, reports
  const [config, setConfig] = useLocal('config', initConfig)
  const [result, setResult] = useState('')
  const containerRef = useRef(null)

  // containerRef.scrollIntoView({ behavior: 'smooth' })
  const handleStart = () => {
    window.electron.ipcRenderer.send('start', config)
  }
  const handleClear = () => {
    setResult('')
  }

  useEffect(() => {
    const { ipcRenderer } = window.electron

    // Listen for the response from the main process
    ipcRenderer.on('message', (event, data) => {
      setResult((r) => r + data + '\n')
    })

    // Clean up when the component unmounts
    return () => {
      ipcRenderer.removeAllListeners('message')
    }
  }, [])

  useEffect(() => {
    const { current } = containerRef
    current.scrollTop = current.scrollHeight
  }, [result])

  return (
    <div className=" text-slate-900 bg-slate-400 dark:text-lime-400 dark:bg-slate-900 text-sm flex flex-col  items-center h-screen">
      <Navigation {...{ page, setPage, result }} />

      {page === 'config' && <Config {...{ config, setConfig }} />}
      {page === 'main' && (
        <div className="flex flex-row w-full h-full overflow-hidden">
          <aside className="flex flex-col justify-center gap-4 w-1/4 p-4 border-r border-slate-300 dark:border-slate-600">
            <div className="flex gap-4 text-center justify-center">
              <Button onClick={handleStart} label="Start" />
              <Button onClick={handleClear} label="Clear" />
            </div>
            <br />
            <h3 className="mt-4 text-center text-lime-700">Current settings</h3>
            <pre className="text-lime-700">{JSON.stringify(config, null, 2)}</pre>
          </aside>
          <section className="w-3/4 p-4">
            <pre ref={containerRef} className="hide-scrollbar h-full overflow-scroll scroll-smooth">
              {result}
            </pre>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
