export interface ICompany {
    "name": string,
    "user_type": string
}

interface IMentor {
    "_id": string,
    "email": string,
    "civility": string,
    "first_name": string,
    "last_name": string,
    "company": ICompany,
    "user_status": string,
    "count_document": any
}

export default IMentor;