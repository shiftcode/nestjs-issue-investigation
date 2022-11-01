import {Module} from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {join} from 'node:path'
import {Character as _C} from './graphql/character.ot'
import {WarriorQueryResolver} from "./graphql/warrior-query.resolver";
import {WarriorResolver} from "./graphql/warrior.resolver";
import {CharacterResolver} from "./graphql/character.resolver";
import {CharacterQueryResolver} from "./graphql/character-query.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),

    })
  ],
  controllers: [],
  providers: [
    WarriorQueryResolver,
    WarriorResolver,
    CharacterQueryResolver,
    CharacterResolver
  ],
})
export class AppModule {}
