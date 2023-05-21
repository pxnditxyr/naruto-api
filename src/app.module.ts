import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CharactersModule } from './characters/characters.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join( __dirname, '..', '..', 'public' ),
    }),
    MongooseModule.forRoot( 'mongodb://127.0.0.1:27017/libro-bingo' ),
    CharactersModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
