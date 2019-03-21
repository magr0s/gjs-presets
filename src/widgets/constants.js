const options = {/** options */
  category: 'Widgets',
  labelTopHoldings: 'Top holdings'
}

const widgetTypes = {
  TOP_HOLDINGS: 'topholdings'
}

const defaultComponentOpts = {
  removable: false,
  copyable: false,
  toolbar: [],
  propagate: ['removable', 'copyable', 'toolbar']
}

const components = {
  preview: {
    ...defaultComponentOpts,
    selectable: false,
    hoverable: false,
    type: 'text',
    tagName: 'div',
    style: {
      width: '100%',
      height: '200px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'font-size': '24px',
      color: '#818181',
      'background-color': '#f9f9f9'
    }
  }
}

export {
  options,
  widgetTypes,
  components
}
