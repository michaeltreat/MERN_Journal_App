import { v4 as uuidv4 } from "uuid"

export class CreateEntry {
    constructor(data){

        this._id = uuidv4()
        this.date = new Date()
        this.description =  data.description
        this.body = data.body
        return this
    }
}
