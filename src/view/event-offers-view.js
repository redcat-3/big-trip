import AbstractView from '../framework/view/abstract-view.js';

function createFormEditOfferTemplate(offer) {
  return (
    `<li class="event__offer">
      <span class="event__offer-title">${offer.title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.price}</span>
    </li>`
  );
}

export default class FormEditOfferView extends AbstractView {
  #offer = null;
  constructor(offer) {
    super();
    this.#offer = offer;
  }

  get template() {
    return createFormEditOfferTemplate(this.#offer);
  }
}

