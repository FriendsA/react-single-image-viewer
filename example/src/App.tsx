import React from 'react'

import ImageViewer from 'react-single-image-viewer'
import 'react-single-image-viewer/dist/index.css'

const App = () => {
  let src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  return <ImageViewer width={200} src={src} />
}

export default App
