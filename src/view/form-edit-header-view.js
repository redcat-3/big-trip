import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import {OFFERS_TYPE} from '../const.js';

const OFFERS_TYPE_TITLE = {
  taxi: 'Taxi',
  bus: 'Bus',
  train: 'Train',
  ship: 'Ship',
  drive: 'Drive',
  flight: 'Flight',
  'check-in': 'Check-in',
  sightseeing: 'Sightseeing',
  restaurant: 'Restaurant'
};

function createFormEditNewEventTemplate(state) {
  const {type, isSaving} = state;
  return (
    `<label class="event__type  event__type-btn" for="event-type-toggle-1">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" ${isSaving ? 'disabled' : ''}>`
  );
}

const createFormEditEventTypeItemTemplate = () => OFFERS_TYPE.map((typeItem) => (`
    <div class="event__type-item">
    <input id="event-type-${typeItem}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${typeItem}">
    <label class="event__type-label  event__type-label--${typeItem}" for="event-type-${typeItem}-1">${OFFERS_TYPE_TITLE[typeItem]}</label>
    </div>
`)).join('');

function createFormEditTemplate(state) {
  const formEditNewEvent = createFormEditNewEventTemplate(state);
  const eventTypeItemsTemplate = createFormEditEventTypeItemTemplate(state);
  return (
    `<header class="event__header">
    <div class="event__type-wrapper">
    ${formEditNewEvent}
      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${eventTypeItemsTemplate}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${state.type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
    `
  );
}

export default class FormEditHeaderView extends AbstractStatefulView {
  #onClick = null;
  constructor(onClick) {
    super();
    this.#onClick = onClick;
    //this.element.addEventListener('click', this.#onClick);
  }


  get template() {
    return createFormEditTemplate();
  }
}


