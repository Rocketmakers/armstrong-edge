import { UUIDService } from "../services/uuid"

export namespace MemoryServer {
  export interface IUserAddress {
    line1: string
    line2?: string
    city: string
    postcode: string
  }

  export interface IUserRole {
    name: string
  }

  export interface IUser {
    id?: string
    firstName: string
    lastName: string
    favouriteCuisine?: string
    isCool?: boolean
    email: string
    address: IUserAddress
    favouriteColour?: 'blue' | 'red' | 'something else'
    points: number
    roles: IUserRole[]
    bio?: string
    sauces?: string[];
    favouriteSauce?: string;
    isACoolGuy?: boolean;
  }

  let users: IUser[] = [
    {
      id: "id-1",
      firstName: "Poornima",
      lastName: "Ardith",
      email: "poornima.ardith@example.com",
      address: { line1: "39 St Denys Road", city: "Portsmouth", postcode: "PO5 3XL" },
      roles: [{ name: "admin" }],
      points: 24,
      favouriteColour:'something else',
    },
    {
      id: "id-2",
      firstName: "İkbal",
      lastName: "Bogdan",
      email: "i̇kbal.bogdan@example.com",
      address: { line1: "18 Crescent Avenue", city: "Drumlithie", postcode: "AB3 4WH" },
      roles: [{ name: "admin" }, { name: "developer" }],
      points: 26,
      favouriteColour:'blue',
    },
    {
      id: "id-3",
      firstName: "Lonny",
      lastName: "Aisyah",
      email: "lonny.aisyah@example.com",
      address: { line1: "83 Broomfield Place", city: "Stonely", postcode: "PE18 5QQL" },
      roles: [{ name: "developer" }],
      points: 53,
      favouriteColour: 'blue',
    },
    {
      id: "id-4",
      firstName: "Vito",
      lastName: "Seong-Jin",
      email: "vito.seong-jin@example.com",
      address: { line1: "53 Ivy Lane", city: "Warehorne", postcode: "TN26 5QY" },
      roles: [{ name: "tester" }, { name: "admin" }, { name: "developer" }],
      points: 42,
      favouriteColour: 'red'
    },
    {
      id: "id-5",
      firstName: "Emanuel",
      lastName: "Aksinia",
      email: "emanuel.aksinia@example.com",
      address: { line1: "42 St Omers Road", city: "Hindley Green", postcode: "WN2 3YS" },
      roles: [{ name: "admin" }, { name: "developer" }],
      points: 71,
      favouriteColour: 'red'
    },
  ]

  export function getUsers(): IUser[] {
    return users
  }

  export function getUser(id: string): IUser {
    const user = users.filter((u) => u.id === id)
    if (user.length === 1) {
      return user[0]
    }
    throw new Error(`User not found with ID ${id}`)
  }

  export function searchUsers(search: string): IUser[] {
    const regex = new RegExp(search, "gi")
    return users.filter((u) => regex.test(u.firstName) || regex.test(u.lastName) || regex.test(u.email))
  }

  export function deleteUser(id: string): void {
    const user = getUser(id)
    users = [...users.filter((u) => u.id !== user.id)]
  }

  export function updateUser(id: string, data: Partial<Omit<IUser, "id">>): IUser {
    let user = getUser(id)
    user = { ...user, ...data }
    return user
  }

  export function addUser(data: Omit<IUser, "id">): IUser {
    const newUser = { id: UUIDService.create(), ...data }
    users.push(newUser)
    return newUser
  }

  interface ISauce {
    id: string;
    name: string;
  }
  const sauces: ISauce[] = [
    {id: 'a', name:'ketchup'},
    {id: 'b', name:'brown sauce'},
    {id: 'c', name:'sriracha'},
    {id: 'd', name:'mayonnaise'},
    {id: 'e', name:'blue cheese'},
    {id: 'f', name:'mustard'},
  ]

  export function getSauces(q: string ) {
    console.log({q})
    return q?.length ? sauces.filter(sauce => sauce.name.includes(q)) : sauces
  }
}
