import { IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly detail: string;

  @IsBoolean()
  readonly completed: boolean;

  @IsDate()
  readonly deadline: Date;

  @IsString()
  readonly username: string;
}
