declare type User = {
  first_name: string,
  last_name: string,
  email: string,
  id: number,
  avatar: { url: string },
}

declare type ButtonEvent = SyntheticEvent<HTMLButtonElement>

declare interface HTMLInputEvent extends SyntheticEvent<HTMLElement> {
  target: HTMLInputElement & EventTarget
}

declare type Message = {
  id: string,
  sender: string,
  read: boolean,
  content: string,
}
