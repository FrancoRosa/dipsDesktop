import { ArrowBigLeft, CogIcon, DownloadIcon, FuelIcon } from 'lucide-react'
import PropTypes from 'prop-types'
import ButtonIcon from './elements/ButtonIcon'
import { sanitizer } from '../js/parser'

const Navigation = ({ page, setPage, result }) => {
  const handleDownload = () => {
    const sanitized = sanitizer(result)

    const now = new Date()
    const filename =
      now.toLocaleString('sv').replace(/[:.]/g, '').replace(/[-.]/g, '').replace(' ', '_') + '.txt'
    const blob = new Blob([sanitized], { type: 'text/plain' })
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
            <ButtonIcon onClick={() => setPage('fuel')}>
              <FuelIcon />
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
  setPage: PropTypes.func.isRequired,
  result: PropTypes.string.isRequired
}

export default Navigation
