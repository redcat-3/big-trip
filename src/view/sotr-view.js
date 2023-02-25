import AbstractView from '../framework/view/abstract-view.js';

const SORT_TITLE = {
  day: 'Day',
  event: 'Event',
  time: 'Time',
  price: 'Price',
  offers: 'Offers'
};

function createSortItemTemplate(sort, currentSortType) {
  return (
    `<div class="trip-sort__item  trip-sort__item--${sort}">
      <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort}" ${sort === currentSortType ? 'checked' : ''}>
      <label class="trip-sort__btn" for="sort-${sort}">${SORT_TITLE[sort]}</label>
    </div>`
  );
}

function createSortTemplate(sortItems, currentSortType) {
  const sortItemsTemplate = sortItems
    .map((sort) => createSortItemTemplate(sort, currentSortType))
    .join('');

  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      ${sortItemsTemplate}
    </form>
    `
  );
}

export default class SortView extends AbstractView {
  #sortTypes = null;
  #currentSort = null;
  #handleSortTypeChange = null;

  constructor({sortTypes, currentSortType, onSortTypeChange}) {
    super();

    this.#sortTypes = sortTypes;
    this.#currentSort = currentSortType;
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#onSortTypeChange);
  }

  get template() {
    return createSortTemplate(this.#sortTypes, this.#currentSort);
  }

  #onSortTypeChange = (evt) => {
    evt.preventDefault();

    const newSort = evt.target.closest('input').value;

    if(newSort) {
      this.#handleSortTypeChange(newSort);
    }
  };
}
