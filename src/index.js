import loader from './presets'

const preset = {
  name: 'gjs-presets',
  loader
}

if (window !== 'undefined') {
  const { presets = [] } = window

  window.presets = [
    ...presets,
    preset
  ]
}

export default presets
