import { shallow, mount } from '@vue/test-utils';
import SofaPagination from '@/pagination/index.js';
import sinon from 'sinon'

describe('pagination', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(SofaPagination);
    expect(wrapper.find('.sofa-pagination'));
  });
});
