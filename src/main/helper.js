import net from 'net'

// const config = {
//   ip: 'telehack.com',
//   port: '23',
//   commands: ['date', 'uptime']
// }

const cnt = {
  soh: '\x01',
  etx: '\x03'
}

const start = () => {
  return new Date().toLocaleString('sv')
}

// const emitter = (event, data) => {
//   console.log('... emitting', event, data)
// }
const client = new net.Socket({ writeable: true })

export const comHandler = (emitter, config) => {
  let process
  let { ip: host, port, commands: tasks } = config
  let currentTask
  let response = ''
  let inProgress = false

  const silenceTimeout = 5
  let silenceCount = 0

  client.on('close', function () {
    emitter('... connection closed')
  })

  client.on('error', function (err) {
    console.error('... connection error: ' + err)
    client.destroy()
    clearInterval(process)
  })

  client.on('data', (d) => {
    silenceCount = 0
    response = response + d.toString()
    // emitter(response)
    // response = ''
    // res

    // if (response.includes(cnt.etx)) {
    //   completeTask()
    // }
  })

  const completeTask = () => {
    inProgress = false
    silenceCount = 0
    emitter(response)
    emitter(`... ${start()} completed ${currentTask}`)
    response = ''
    emitter('... ________________________________________')
  }

  client.connect(port, host, () => {
    emitter(`... telnet connected! ${(host, port)}`)
    emitter('... connected to veeder root')
  })

  process = setInterval(() => {
    if (!inProgress) {
      if (tasks.length == 0) {
        client.destroy()
        console.log('cleaning up')
        clearInterval(process)
      }
      currentTask = tasks.shift()
      if (currentTask) {
        emitter(`... ${start()} processing ${currentTask}`)
        client.write(currentTask + '\r')
        inProgress = true
      }
    } else {
      if (silenceCount > silenceTimeout) {
        completeTask()
      }
    }
    silenceCount++
    console.log('.')
  }, 1000)
}
