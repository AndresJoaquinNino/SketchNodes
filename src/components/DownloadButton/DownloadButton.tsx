import { ButtonBox, Floating } from '@src/styles/mixins'
import { toPng } from 'html-to-image'
import React from 'react'

function downloadImage(dataUrl: string) {
  const a = document.createElement('a')

  a.setAttribute('download', 'ExportedSketch.png')
  a.setAttribute('href', dataUrl)
  a.click()
}

const IMAGE_WIDTH = 1024
const IMAGE_HEIGHT = 768

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
    <Floating
      $right='1%'
      $bottom='1%'
      $transform='translateY(-50%)'
    >
      <ButtonBox onClick={handleOnClick}>
        <span>Export</span>
      </ButtonBox>
    </Floating>
  )
}


export default DownloadButton