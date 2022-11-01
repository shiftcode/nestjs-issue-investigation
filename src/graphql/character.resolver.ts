import {ResolveField, Resolver} from "@nestjs/graphql";
import {Character} from "./character.ot";

@Resolver(() => Character)
export class CharacterResolver {

    @ResolveField(() => String)
    async resolveFieldOnCharacter(){
        return 'resolveFieldOnCharacter'
    }
}
