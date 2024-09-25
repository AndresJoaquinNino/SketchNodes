import { ButtonBox, Floating } from '@src/styles/mixins'
import { toPng } from 'html-to-image'
import React from 'react'

const IMAGE_WIDTH = 1024
const IMAGE_HEIGHT = 768

const DownloadButton: React.FC = () => {

  const handleOnClick = async () => {
    const flowElement: HTMLElement | null = document.querySelector('.react-flow__renderer')
    const backgroundElement: HTMLElement | null = document.querySelector('.react-flow__background')

    if (flowElement === null || backgroundElement === null) return

    const backgroundUrl: string = await toPng(backgroundElement)

    flowElement.style.backgroundImage = `url(${backgroundUrl})`
    flowElement.style.backgroundSize = "cover"
    flowElement.style.backgroundRepeat = "no-repeat"

    const flowUrl: string = await toPng(flowElement, {
      backgroundColor: "#ffffff",
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
    })

    flowElement.style.backgroundImage = ""

    const a = document.createElement('a')

    a.setAttribute('download', 'ExportedSketch.png')
    a.setAttribute('href', flowUrl)
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