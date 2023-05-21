import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller( 'characters' )
export class CharactersController {
  constructor( private readonly charactersService: CharactersService ) {}

  @Post()
  create( @Body() createCharacterDto: CreateCharacterDto ) {
    return this.charactersService.create(createCharacterDto);
  }

  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Get( ':term' )
  findOne( @Param( 'term' ) term: string ) {
    return this.charactersService.findOne( term );
  }

  @Patch( ':term' )
  update( @Param('term') term: string, @Body() updateCharacterDto: UpdateCharacterDto ) {
    return this.charactersService.update( term, updateCharacterDto );
  }

  @Delete( ':id' )
  remove( @Param( 'id', ParseMongoIdPipe ) id: string ) {
    return this.charactersService.remove( id );
  }
}
