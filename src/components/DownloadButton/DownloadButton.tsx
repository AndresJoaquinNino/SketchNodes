import { toPng } from 'html-to-image'
import React from 'react'
import styled from 'styled-components'


function downloadImage(dataUrl: string) {
  const a = document.createElement('a')

  a.setAttribute('download', 'ExportedSketch.png')
  a.setAttribute('href', dataUrl)
  a.click()
}

const IMAGE_WIDTH = 1024
const IMAGE_HEIGHT = 768

export const ShapesBox = styled.button({
  position: 'fixed',
  right: '1%',
  bottom: '1%',
  transform: 'translateY(-50%)',
  background: 'white',
  borderRadius: '5px',
  borderWidth: '3px',
  borderStyle: 'solid',
  borderColor: '#3A3A3A',
  padding: '.5rem',
  boxShadow: '3px 3px 5px #0000004d',
  zIndex: 5,
  fontFamily: 'sans-serif'
})

const DownloadButton: React.FC = () => {

  const handleOnClick = () => {
    const element: HTMLElement | null = document.querySelector('.react-flow__viewport')
    if (element === null) return

    toPng(element, {
      backgroundColor: '#fff',
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
    }).then(downloadImage)
  }
  return (
    <ShapesBox onClick={handleOnClick}>
      <span>Export</span>
    </ShapesBox>
  )
}


export default DownloadButton