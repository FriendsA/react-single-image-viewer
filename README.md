# react-single-image-viewer

> react image view component

[![NPM](https://img.shields.io/npm/v/react-single-image-viewer.svg)](https://www.npmjs.com/package/react-single-image-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-single-image-viewer
```

## Usage

```tsx
import React, { Component } from 'react'

import ImageView from 'react-single-image-viewer'
import 'react-single-image-viewer/dist/index.css'

class Example extends Component {
  render() {
    return <ImageView src="xxxxx" height="100" width="200" callback="xxxx"/>
  }
}
```

## Params

|   name   |          description          |
| :------: | :---------------------------: |
|   src    |           img path            |
|  height  |          img height           |
|  width   |           img width           |
| callback | when img load error show path |

## Example
[在线例子](https://github.com/FriendsA/react-single-image-viewer.git)

## Notice
 Because of React hooks，if you want to run test, you need to download react,react-dom yourself,or add them to devDependencies
## License

MIT © [FriendsA](https://github.com/FriendsA)
