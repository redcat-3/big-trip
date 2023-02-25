import AbstractView from '../framework/view/abstract-view.js';

function createFormEditTemplate() {
  return (
    `<form class="event event--edit" action="#" method="post">
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">
          </div>
        </section>
      </section>
    </form>`
  );
}

export default class FormEditView extends AbstractView {

  get template() {
    return createFormEditTemplate();
  }
}

