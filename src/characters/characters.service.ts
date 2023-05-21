import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination.dto';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {

  constructor (
    @InjectModel( Character.name )
    private readonly characterModel : Model<Character>
  ) {}

  async create( createCharacterDto: CreateCharacterDto ) {
    
    createCharacterDto.name = createCharacterDto.name.toLowerCase()
    createCharacterDto.surname = createCharacterDto.surname.toLowerCase()
    createCharacterDto.village = createCharacterDto.village.toLowerCase()

    console.log( createCharacterDto )
    try {
      const character = await this.characterModel.create( createCharacterDto )
      return character
    } catch ( error ) {
      this.handleExection( error )
    }
  }

  async findAll ( paginationQueryDto : PaginationQueryDto) {

    const { limit = 10, offset = 0 } = paginationQueryDto

    const characters = this.characterModel.find()
      .limit( limit )
      .skip( offset )
      .sort( 'top' )
      .select( '-__v -_id' )
    return characters
  }

  async findOne( term : string ) {
    let character : Character | null = null

    if ( !isNaN( Number( term ) ) ) {
      character = await this.characterModel.findOne({ top: term })
      return character
    }

    if ( isValidObjectId( term ) ) {
      character = await this.characterModel.findById( term )
      return character
    }

    if ( !character )
      throw new NotFoundException( `El personaje con el id o top ${ term } no existe` )

    return character
  }

  async update( term : string, updateCharacterDto: UpdateCharacterDto ) {
    const character = await this.findOne( term )

    if ( updateCharacterDto.name )
      updateCharacterDto.name = updateCharacterDto.name.toLowerCase()
    if ( updateCharacterDto.surname )
      updateCharacterDto.surname = updateCharacterDto.surname.toLowerCase()
    if ( updateCharacterDto.village )
      updateCharacterDto.village = updateCharacterDto.village.toLowerCase()
    
    if ( !character )
      throw new NotFoundException( `El personaje con el id o top ${ term } no existe` )


    try {
      await character.updateOne( updateCharacterDto, { new: true } )

      return {
        ...character.toJSON(),
        ...updateCharacterDto
      }
    } catch ( error ) {
      this.handleExection( error )
    }
  }

  async remove( id : string ) {
    const { deletedCount } = await this.characterModel.deleteOne({ _id: id })
    if ( deletedCount === 0 )
      throw new NotFoundException( `El personaje con el id ${ id } no existe` )
    return
  }

  handleExection ( error : any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException( `El personaje con los datos ${ JSON.stringify( error.keyValue ) } ya existe` )
    }
    console.log( error )
    throw new InternalServerErrorException( `No se ha podido crear el personje - revise los Logs del servidor` )
  }
}
