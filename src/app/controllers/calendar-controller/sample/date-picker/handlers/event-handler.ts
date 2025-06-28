export class EventHandler {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static handleClickEvent(
    elem: HTMLElement,
    callback: (value?: any) => void,
    parent: any
  ): void {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      callback.call(parent, event);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static handleRemoveClickEvent(
    elem: HTMLElement,
    callback: (value?: any) => void,
    parent: any
  ) {
    elem.removeEventListener('click', (event) => callback.call(parent, event));
  }

  public static handleChangeEvent(elem: HTMLElement, callback: (value?: any) => void, parent: any) {
    elem.addEventListener('change', (event) => callback.call(parent, event));
  }
}
