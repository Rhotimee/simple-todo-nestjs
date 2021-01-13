import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule, 
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, { useCreateIndex: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
