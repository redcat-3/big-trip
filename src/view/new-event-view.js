import AbstractView from '../framework/view/abstract-view.js';

function createNewEventTemplate() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';
}

export default class NewEventView extends AbstractView {
  #onClick = null;
  constructor(onClick) {
    super();
    this.#onClick = onClick;
    this.element.addEventListener('click', this.#onClick);
  }


  get template() {
    return createNewEventTemplate();
  }
}
