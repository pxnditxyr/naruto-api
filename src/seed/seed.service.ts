import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Character } from 'src/characters/entities/character.entity';
import { characters } from './characters.data';


@Injectable()
export class SeedService {

  constructor (
    @InjectModel( Character.name )
    private readonly characterModel : Model<Character>
  ) {}


  async execute () {
    await this.characterModel.deleteMany( {} )
    await this.characterModel.insertMany( characters )
    return 'Added seed data of characters'
  }
}
