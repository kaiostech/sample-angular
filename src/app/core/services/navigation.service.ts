import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {
  public currentItem: Subject<Element> = new Subject<Element>();

  public init() {
    const firstElement = this.getAllElements()[0];
    firstElement.setAttribute('nav-selected', 'true');
    firstElement.setAttribute('nav-index', '0');
    // tslint:disable-next-line: no-unused-expression
    'focus' in firstElement && firstElement.focus();
  }

  private getAllElements(): NodeListOf<Element | HTMLInputElement> {
    return document.querySelectorAll('[nav-selectable]');
  }

  private getCurrentElement(): HTMLInputElement | Element {
    return document.querySelector('[nav-selected=true]');
  }

  private getTheIndexOfTheSelectedElement(current?: Element): number {
    const currentElement = current || this.getCurrentElement();
    return currentElement ? parseInt(currentElement.getAttribute('nav-index'), 10) : 0;
  }

  public getCurrentItem(): [HTMLInputElement | Element, number] {
    const item = this.getCurrentElement();
    const index = this.getTheIndexOfTheSelectedElement(item);
    return [item, index];
  }

  // tslint:disable-next-line: no-shadowed-variable
  private selectElement(selectElement: Element): void {
    [].forEach.call(this.getAllElements(), (element: Element | HTMLInputElement, index: number) => {
      const selectThisElement = element === selectElement;
      element.setAttribute('nav-selected', selectThisElement.toString());
      element.setAttribute('nav-index', index.toString());

      // tslint:disable-next-line: no-unused-expression
      selectThisElement && this.currentItem.next(element);

      if (element.nodeName === 'INPUT') {
        selectThisElement
          // tslint:disable-next-line: no-unused-expression
          ? 'focus' in element && element.focus()
          : 'blur' in element && element.blur();
      }
    });
  }

  public Down(): void {
    const allElements = this.getAllElements();
    const currentIndex = this.getTheIndexOfTheSelectedElement();
    const goToFirstElement = currentIndex + 1 > allElements.length - 1;
    const setIndex = goToFirstElement ? 0 : currentIndex + 1;
    this.selectElement(allElements[setIndex] || allElements[0]);
  }

  public Up(): void {
    const allElements = this.getAllElements();
    const currentIndex = this.getTheIndexOfTheSelectedElement();
    const goToLastElement = currentIndex === 0;
    const setIndex = goToLastElement ? allElements.length - 1 : currentIndex - 1;
    this.selectElement(allElements[setIndex] || allElements[0]);
  }
}
