import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { List as ImmutableList, Map } from 'immutable';
import Ps from 'perfect-scrollbar';
import StickerList from '../../src/components/StickerList';
import StickerListItem from '../../src/components/StickerListItem';

describe('<StickerList />', () => {
  const stickers = ImmutableList.of(
    Map({image: 'a.png', id: 1}),
    Map({image: 'b.png', id: 2}),
    Map({image: 'c.png', id: 3})
  );

  it('displays all the stickers', () => {
    const rendered = shallow(<StickerList stickers={stickers} />);
    expect(rendered.find(StickerListItem)).to.have.length(stickers.count());
  });

  it('should call PerfectScrollbar.initialize', () => {
    const spy = chai.spy.on(Ps, 'initialize');
    const rendered = mount(<StickerList stickers={stickers} />);
    expect(spy, 'Ps.initialize was not called').to.have.been.called();
  });
});
