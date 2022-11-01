import {Parent, Query, ResolveField, Resolver, Root} from "@nestjs/graphql";
import {Warrior} from "./warrior.ot";

@Resolver()
export class WarriorQueryResolver {

    constructor() {
    }

    @Query(() => [Warrior])
    findWarriors() {
        return [<Warrior>{
            id:1,
            level: 4
        }]
    }
}