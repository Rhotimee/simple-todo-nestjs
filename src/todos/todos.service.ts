import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity'

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private todoModel: Model<Todo>
  ){}

  create(createTodoDto: CreateTodoDto) {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  findAll() {
    return this.todoModel.find().exec();
  }

  async findOne(id: string) {
    const todo = await this.todoModel.findOne({ _id: id}).exec()
    if (!todo) {
      throw new NotFoundException(`Todo #${id} not found`);
    }

    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const existingTodo = await this.todoModel.findOneAndUpdate(
      { _id: id },
      { $set: updateTodoDto },
      { new: true }
    ).exec();

    if (!existingTodo) {
      throw new NotFoundException(`Todo #${id} not found`);
    }

    return existingTodo
  }

  async remove(id: string) {
    const todo = await this.findOne(id);
    return todo.remove();
  }
}
