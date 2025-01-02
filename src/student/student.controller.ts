import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post('/')
    createStudent(@Body() student: CreateStudentDto) {
        return this.studentService.createStudent(student);
    }

    @Get('/')
    getStudents() {
        return this.studentService.getStudents();
    }

    @Put('/:id')
    updateStudent(@Param('id') id: number, @Body() student: CreateStudentDto) {
        return this.studentService.updateStudent(id, student);
    }
}
