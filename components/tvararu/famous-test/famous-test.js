FamousFramework.scene('tvararu:famous-test', {
  events: {
    '#surface': {
      'click': ($state) => {
        const clickCount = $state.get('clickCount')
        $state.set('clickCount', clickCount + 1)
        const scaleX = $state.get('scaleX')
        $state.set('scaleX', 1.2, { duration: 100, curve: 'easeOut' })
          .thenSet('scaleX', 1.0, { duration: 100, curve: 'easeIn' })
        const scaleY = $state.get('scaleY')
        $state.set('scaleY', 1.2, { duration: 100, curve: 'easeOut' })
          .thenSet('scaleY', 1.0, { duration: 100, curve: 'easeIn' })
      },
    },
  },
  states: {
    clickCount: 0,
    scaleX: 1.0,
    scaleY: 1.0,
    sizeX: 200,
    sizeY: 200,
    sizeZ: 200,
  },
  behaviors: {
    '#surface': {
      'content': (clickCount) => clickCount,
      'align': [0.5, 0.5],
      'mount-point': [0.5, 0.5],
      'origin': [0.5, 0.5],
      'scale': (scaleX, scaleY) => [scaleX, scaleY],
      'size': (sizeX, sizeY, sizeZ) => [sizeX, sizeY, sizeZ],
      'style': {
        'background-color': '#34495e',
        'color': 'white',
        'cursor': 'pointer',
        'text-align': 'center',
        '-webkit-user-select': 'none',
      },
    },
  },
  tree: `
    <node id="surface"></node>
  `,
});
