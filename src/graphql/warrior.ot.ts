import {Character} from "./character.ot";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class Warrior extends Character {
    @Field()
    level: number;
}