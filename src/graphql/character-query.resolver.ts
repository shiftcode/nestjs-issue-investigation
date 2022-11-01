import {Query, ResolveField, Resolver} from "@nestjs/graphql";
import {Character} from "./character.ot";

/**
 * This resolver only serves the purpose of making the graphql schema generator happy,
 * otherwise the character
 */
@Resolver(() => Character)
export class CharacterQueryResolver {

    @Query(() => [Character])
    async findCharacters(){
        return []
    }
}
