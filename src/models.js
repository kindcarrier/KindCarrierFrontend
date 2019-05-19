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

declare type Negotiation = {
  name: string,
  photo: string,
  description: string,
  service_cost: string,
  latitude_from: number,
  longitude_from: number,
  latitude_to: number,
  longitude_to: number,
  type: string,
  address_from: {},
  address_to: {},
  owner_id: number,
  accepter: number,
}

declare type Marker = {
  id: string,
  lat: number,
  lon: number,
  type: string,
}
