import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { drizzleProvider } from 'src/drizzle/drizzle.provider';

@Module({
  controllers: [StudentController],
  providers: [StudentService, ...drizzleProvider],
})
export class StudentModule {}
