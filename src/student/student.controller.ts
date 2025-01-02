import { Controller, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post('/')
    createStudent(@Body() student: CreateStudentDto) {
        return this.studentService.createStudent(student);
    }
}
