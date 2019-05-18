declare type User = {
  first_name: string,
  last_name: string,
  email: string,
  id: number,
}

declare type ButtonEvent = SyntheticEvent<HTMLButtonElement>

declare interface HTMLInputEvent extends SyntheticEvent<HTMLElement> {
  target: HTMLInputElement & EventTarget
}
