import theme from '..'

describe('theme', () => {
  it('should be defined', () => {
    expect(typeof theme).toBe('object')
  })

  it('should contain theme definitions', () => {
    expect(theme).toMatchSnapshot()
  })
})
