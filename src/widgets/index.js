import { options } from './constants'
import blocks from './blocks'
import components from './components'

export default function (editor, opts = {}) {
  const config = Object.assign({}, options, opts)

  components(editor)
  blocks(editor, config)
}
