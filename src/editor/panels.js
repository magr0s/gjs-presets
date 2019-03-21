export default function (editor, opts = {}) {
  const pm = editor.Panels

  pm.removePanel('commands')
  pm.removeButton('options', 'export-template')

  pm.addPanel({
    id: 'myNewPanel',
    visible  : true,
    buttons  : [{
      id: 'addPage',
      className: 'fa fa-plus',
      command: 'createPage',
      attributes: { title: 'Add page'},
      active: false,
      disable: false
    }, {
      id: 'removePage',
      className: 'fa fa-minus',
      command: 'deletePage',
      attributes: { title: 'Remove page'},
      active: false,
      disable: true
    }]
  })
}
