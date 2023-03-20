import {
    randomUUID
}
from "crypto";

export class UniqueEntityID {
    constructor() {
        return randomUUID()
    }
}
