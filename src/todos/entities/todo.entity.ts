import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  detail: string;

  @Prop()
  completed: boolean;

  @Prop()
  deadline: string;

  @Prop({ index: true })
  username: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);