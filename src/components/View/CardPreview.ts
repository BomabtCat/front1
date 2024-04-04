import { Card } from "./Card";
import { IActions, IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface ICard {
  render(data: IProductItem): HTMLElement;
}

export class CardPreview extends Card implements ICard {
  text: HTMLElement;
  button: HTMLElement;

  constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions) {
    super(template, events, actions);
    this.text = this._cardElement.querySelector('.card__text') // text - description
    this.button = this._cardElement.querySelector('.card__button'); // кнопка добавить в корзину

    this.button.addEventListener('click', () => { this.events.emit('card:addBasket') });
  }

  render(data: IProductItem): HTMLElement {
    this._cardCategory.textContent = data.category;
    this.cardCategory = data.category;
    this._cardTitle.textContent = data.title;
    this._cardImage.src = data.image;
    this._cardImage.alt = this._cardTitle.textContent;
    this._cardPrice.textContent = this.setPrice(data.price);
    this.text.textContent = data.description;
    this.button.textContent = 'Купить';
    return this._cardElement;
  }
}