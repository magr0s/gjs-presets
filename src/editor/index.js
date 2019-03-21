import commands from './commands'
import panels from './panels'

export default function (editor, opts = {}) {
  commands(editor)
  panels(editor)
}
