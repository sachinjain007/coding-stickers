import React from 'react';
import { expect } from 'chai';
import { List as ImmutableList, Map } from 'immutable';
import { customization, stickers }  from '../src/reducer';

describe('reducer', () => {

  describe('customization', () => {
    it('should return the initial state', () => {
      const actual = customization(undefined, {});
      const expected = ImmutableList.of();
      expect(actual).to.eql(expected);
    });

    it('should allow to add stickers', () => {
      const sticker = new Map({ index: 100, image: 'foo.png' });
      const actual = customization(ImmutableList.of(), { type: 'ADD_CUSTOMIZATION', sticker });
      const expected = ImmutableList.of(new Map({ index: 100, image: 'foo.png' }));
      expect(actual).to.eql(expected);
    });

    it('should allow a sticker to be hidden', () => {
      const actual = customization(
        ImmutableList.of(
          new Map({ index: 0, x: 0, y: 0 }),
          new Map({ index: 1, x: 0, y: 0 })
        ),
        { type: 'REMOVE_CUSTOMIZATION', index: 1 }
      );

      const expected = ImmutableList.of(
        new Map({ index: 0, x: 0, y: 0 }),
        new Map({ index: 1, x: 0, y: 0, visible: false })
      );
      expect(actual).to.eql(expected);
    });

    it('should allow a sticker to be selected', () => {
      const sticker = new Map({ index: 0 });
      const selectedSticker = new Map({ index: 0, selected: true })
      const actual = customization(
        ImmutableList.of(sticker, sticker),
        { type: 'SELECT_STICKER', index: 1 }
      );
      const expected = ImmutableList.of(sticker, selectedSticker);
      expect(actual).to.eql(expected);
    });

    it('should allow to clear the current selection', () => {
      const selectedSticker = new Map({ index: 0, selected: true })
      const actual = customization(
        ImmutableList.of(selectedSticker),
        { type: 'CLEAR_SELECTION' }
      );
      const expected = ImmutableList.of(new Map({ index: 0 }));
      expect(actual).to.eql(expected);
    });

    it('should allow to clear customizations', () => {
      const sticker = new Map({ index: 100, image: 'foo.png' });
      const actual = customization(
        ImmutableList.of(sticker, sticker),
        { type: 'CLEAR_CUSTOMIZATION' }
      );

      const expected = ImmutableList.of();
      expect(actual).to.eql(expected);
    });
  });

  describe('stickers', () => {
    it('should return an empty list as the initial state', () => {
      const actual = stickers(undefined, {})
      const expected = ImmutableList.of();
      expect(actual).to.eql(expected);
    });
  });
});
