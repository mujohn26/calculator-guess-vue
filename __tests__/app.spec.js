import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe("App",() => {
  it("has data",() => {
    expect(typeof App.data).toBe('function')
  })
})

describe("Mounted app", () => {

  const wrapper = mount(App)
  test("is vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it("renders correct html text", () => {
    expect(wrapper.html()).toContain("let us test your arthimetic")
    expect(wrapper.html()).toContain("What is the sum of two numbers")
  })
  it("has a button", () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  it("renders correctly set data", async() => {
    wrapper.setData({ x1: 5, x2: 10 })
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain("15")
  })
  it('button click without correct sum', () => {
    expect(wrapper.vm.message).toBe("")
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.message).toBe('TRY AGAIN')
  })

  it('button click with correct sum', () => {
    wrapper.setData({ guess: "15" })
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.message).toBe('SUCCESS !')
  })
})