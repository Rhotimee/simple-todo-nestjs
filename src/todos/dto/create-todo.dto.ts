import { IsString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly detail: string;

  @IsBoolean()
  readonly completed: boolean;

  @IsString()
  readonly deadline: string;
}
