export interface UsersList {
    id: number;
    name: String;
    username: String,
    email: String,
    address: AddressInput,
    phone: String,
    website: String,
    company: CompanyInput
}

export interface AddressInput {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: geoInput
}

export interface CompanyInput {
    name: String,
    catchPhrase: String,
    bs: String
}

export interface geoInput {
    lat: String,
    lng: String
}