import {FIELD_RESOLVER_MIDDLEWARE_METADATA, Parent, Query, ResolveField, Resolver, Root} from "@nestjs/graphql";
import {Warrior} from "./warrior.ot";
import {CharacterResolver} from "./character.resolver";

@Resolver(() => Warrior)
export class WarriorResolver /* works when extending: extends CharacterResolver */ {

    @ResolveField(() => String)
    async resolveFieldOnWarrior(){
        return 'resolveFieldOnWarrior'
    }
}
