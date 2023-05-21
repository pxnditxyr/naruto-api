import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CharactersModule } from 'src/characters/characters.module';

@Module({
  controllers: [ SeedController ],
  providers: [ SeedService ],
  imports: [ CharactersModule ]
})
export class SeedModule {}
