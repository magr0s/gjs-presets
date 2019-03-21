import { widgetTypes as TYPES, components, options } from './constants'

export default function (editor, opts = {}) {
  const domc = editor.DomComponents
  const defaultType = domc.getType('default')
  const {
    model: defaultModel,
    view: defaultView
  } = defaultType

  domc.addType(TYPES.TOP_HOLDINGS, {
    model: defaultModel.extend({}, {
      isComponent (el) {
        if (el.getAttribute &&
          el.getAttribute('data-gjs-type') === TYPES.TOP_HOLDINGS) {
            return {
              type: TYPES.TOP_HOLDINGS
            }
          }
      }
    }),

    view: defaultView.extend({
      init () {
        const comps = this.model.get('components')

        if (!comps.length) {
          comps.reset()

          const {
            preview
          } = components

          comps.add({
            ...preview,
            content: options.labelTopHoldings
          })
        }
      }
    })
  })
}
