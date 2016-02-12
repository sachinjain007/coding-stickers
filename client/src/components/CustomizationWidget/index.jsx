import React, { Component } from 'react';
import StickerList from '../StickerList';
import DraggableSticker from '../DraggableSticker';
import './CustomizationWidget.scss';

const defaultProps = {
  selectedStickers: [],
};

class CustomizationWidget extends Component {

  renderSelectedStickers(selectedStickers) {
    return selectedStickers.map((sticker, index) => (
      <DraggableSticker key={ index } image={ sticker.get('image') }/>
    ));
  }

  render() {
    const {
      onClearCustomization,
      selectedStickers,
      onClickSticker,
      stickers,
    } = this.props;

    return (
      <div className="container container-product">
        <div className="product-view">
          <div className="product-img dropzone">
            <img id="custom" src="http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbookpro/select/macbookpro-select-inthebox?wid=1122&hei=804&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453535639039" />
            { this.renderSelectedStickers(selectedStickers) }
          </div>
        </div>
        <div className="content stickers">
          <div className="stickers-header">
            <a href="#" className="link-secondary" onClick={onClearCustomization}>
              CLEAR CUSTOMIZATION
            </a>
            <div className="share">
              <span>Share it</span>
              <a className="icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a className="icon">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <StickerList
            onClickSticker={onClickSticker}
            onClearCustomization={onClearCustomization}
            stickers={stickers}
          />
      </div>
    </div>
    );
  }
}

CustomizationWidget.defaultProps = defaultProps;
export default CustomizationWidget;
