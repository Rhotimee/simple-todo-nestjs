import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

@Schema({ timestamps: true })
export class Todo extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  detail: string;

  @Prop()
  completed: boolean;

  @Prop()
  deadline: Date;

  @Prop({ index: true })
  username: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);