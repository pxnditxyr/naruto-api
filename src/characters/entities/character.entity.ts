import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Character extends Document {
  @Prop({
    index: true,
    unique: true,
  })
  top: number

  @Prop()
  jutsus: number

  @Prop()
  name: string

  @Prop()
  surname: string

  @Prop()
  village: string

}

export const CharacterSchema = SchemaFactory.createForClass( Character )
