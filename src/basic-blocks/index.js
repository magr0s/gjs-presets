import { options } from './constants'
import blocks from 'grapesjs-blocks-basic/src/blocks'

export default function (editor, opts = {}) {
  const config = Object.assign({}, options, opts)

  blocks(editor, config)
}
