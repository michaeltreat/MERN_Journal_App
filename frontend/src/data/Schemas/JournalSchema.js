import { v4 as uuidv4 } from "uuid"

export class CreateJournal {
    constructor(data) {
        this._id = uuidv4()
        this.visibility = {
            public: false,
            shared: true
        }
        this.title = data.title
        this.description = data.description
        this.author = {
            _id: uuidv4()
        }
        this.entries = []
        return this
    }
}
