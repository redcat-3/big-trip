import AbstractView from '../framework/view/abstract-view.js';

function createPictureTemplate(picture) {
  return (
    `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`
  );
}

function createFormEditDestinationTemplate(destination) {
  const sortItemsTemplate = destination.pictures
    .map((picture) => createPictureTemplate(picture))
    .join('');

  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
        ${sortItemsTemplate}
        </div>
      </div>
    </section>`
  );
}

export default class FormEditDestinationView extends AbstractView {
  #destination = null;
  constructor(destination) {
    super();
    this.#destination = destination;
  }

  get template() {
    return createFormEditDestinationTemplate(this.#destination);
  }
}
