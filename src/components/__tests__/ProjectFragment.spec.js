import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProjectFragment from '../fragments/ProjectFragment.vue'

describe('ProjectFragment', () => {
  it('renders with link', () => {
    const wrapper = mount(ProjectFragment, {
      props: { linkHref: 'http://example.com' },
      slots: { title: 'Test project', linkText: 'foo', description: 'bar' }
    })
    expect(wrapper.text()).toContain('Test project')
    expect(wrapper.find('a')).toBeDefined()
    expect(wrapper.find('a').text()).toContain('foo')
    expect(wrapper.find('a').attributes('href')).toBe('http://example.com')
  })
  it('renders without link', () => {
    const wrapper = mount(ProjectFragment, {
      slots: { title: 'Test project', description: 'bar' }
    })
    expect(wrapper.text()).toContain('Test project')
    expect(wrapper.findAll('a')).toEqual([])
  })
  it('renders with tags', () => {
    const wrapper = mount(ProjectFragment, {
      props: {
        labels: [
          { text: 'foo', weights: { professional: 1, interest: 0 } },
          { text: 'bar', weights: { professional: 1, interest: 0 } }
        ]
      },
      slots: { title: 'Test project', linkText: 'foo', description: 'bar' }
    })
    expect(wrapper.text()).toContain('Test project')
    expect(wrapper.findAll('.labels')).toBeDefined()
    expect(wrapper.findAll('.labels > span')).length(2)
    expect(wrapper.find('.labels > span:nth-child(3)').text()).toBe(', bar') // nth-child(1) is the tag icon
  })
})
