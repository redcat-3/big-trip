import AbstractView from '../framework/view/abstract-view.js';

const FILTER_TITLE = {
  everything: 'Everything',
  future: 'Future',
  present: 'Present',
  past: 'Past'
};

function createFilterItemTemplate(filter, currentFilterType) {
  return (
    `<div class="trip-filters__filter">
    <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filter}" ${filter === currentFilterType ? 'checked' : ''}>
    <label class="trip-filters__filter-label" for="filter-${filter}">${FILTER_TITLE[filter]}</label>
    </div>`
  );
}

function createFiltersTemplate(filterItems, currentFilterType) {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join('');

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filterItemsTemplate}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
    `
  );
}

export default class FiltersView extends AbstractView {
  #filters = null;
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({filters, currentFilterType, onFilterTypeChange}) {
    super();

    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('click', this.#onFilterTypeChange);
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #onFilterTypeChange = (evt) => {
    evt.preventDefault();

    const newFilter = evt.target.closest('input').value;

    if(newFilter) {
      this.#handleFilterTypeChange(newFilter);
    }
  };
}

