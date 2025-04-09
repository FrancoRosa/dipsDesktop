import {
  ArrowBigLeft,
  CircleXIcon,
  CogIcon,
  DownloadIcon,
  FileBarChart2Icon,
  PowerOffIcon
} from 'lucide-react'
import Theme from './Theme'
import PropTypes from 'prop-types'
import ButtonIcon from './elements/ButtonIcon'
// import { start, stop, keep } from "../js/record";
// import Button from "./elements/Button";
const handlePower = () => {
  console.log('power_off')
  window.electron.ipcRenderer.send('power_off')
}

const handleQuit = () => {
  console.log('quit')
  window.electron.ipcRenderer.send('quit')
}

const Navigation = ({ page, setPage, result }) => {
  const handleDownload = () => {
    const now = new Date()
    const filename =
      now.toLocaleString('sv').replace(/[:.]/g, '').replace(/[-.]/g, '').replace(' ', '_') + '.txt'
    const blob = new Blob([result], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex justify-between w-full absolute bottom-0 z-10 p-2">
      <div className="flex justify-around">
        {page === 'main' ? (
          <div className="flex gap-1">
            <ButtonIcon onClick={handleDownload}>
              <DownloadIcon />
            </ButtonIcon>
            <ButtonIcon onClick={() => setPage('config')}>
              <CogIcon />
            </ButtonIcon>
          </div>
        ) : (
          <ButtonIcon onClick={() => setPage('main')}>
            <ArrowBigLeft />
          </ButtonIcon>
        )}
      </div>
    </div>
  )
}

Navigation.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Navigation
