import blocksBasicPreset from './basic-blocks'
import widgetsPreset from './widgets'
import editorPreset from './editor'

export default function (editor, opts = {}) {
  editorPreset(editor)
  blocksBasicPreset(editor)
  widgetsPreset(editor)
}
