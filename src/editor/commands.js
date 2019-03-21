export default function (editor, opts = {}) {
  const cmd = editor.Commands

  cmd.add('createPage', (editor, sender) => {
    sender.set('active', 0)
  })

  cmd.add('removePage', (editor, sender) => {
    sender.set('active', 0)
  })
}
