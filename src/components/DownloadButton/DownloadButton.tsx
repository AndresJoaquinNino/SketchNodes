import { ButtonBox, Floating } from '@src/styles/mixins'
import { toPng } from 'html-to-image'
import React from 'react'

const IMAGE_WIDTH = 1024
const IMAGE_HEIGHT = 768

const DownloadButton: React.FC = () => {

  const handleOnClick = async () => {
    const element: HTMLElement | null = document.querySelector('.react-flow__viewport')
    if (element === null) return

    const dataUrl: string = await toPng(element, {
      backgroundColor: '#fff',
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
    })

    const a = document.createElement('a')

    a.setAttribute('download', 'ExportedSketch.png')
    a.setAttribute('href', dataUrl)
    a.click()

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