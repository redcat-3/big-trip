import AbstractView from '../framework/view/abstract-view.js';

function createFormEditOfferTemplate(offer) {
  return (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="event-offer-${offer.id}">
      <label class="event__offer-label" for="${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
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
