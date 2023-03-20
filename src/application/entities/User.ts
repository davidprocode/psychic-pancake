import {
    Entity
}
from "../../domain/core/entity";

interface UserProps {
    firstname: string
}

export class User extends Entity<UserProps > {}
