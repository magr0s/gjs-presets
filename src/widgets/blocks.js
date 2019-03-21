import { widgetTypes as TYPES } from './constants'

export default function (editor, opts = {}) {
  const bm = editor.BlockManager

  bm.add('top-holdings', {
    label: opts.labelTopHoldings,
    category: opts.category,
    attributes: {
      class: 'fa fa-table'
    },
    content: {
      type: TYPES.TOP_HOLDINGS
    }
  })
}
