export default interface IMusic {
    id?: number
    title : string
    author : string
    image : string
    audio : string
}

export default interface ICreateUser {
    login : string
    password : string
    role ?: string
}

