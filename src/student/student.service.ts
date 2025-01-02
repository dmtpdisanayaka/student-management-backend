import { Injectable, Inject } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { CreateStudentDto } from './dto/create-student.dto';
import * as schema from 'src/drizzle/schema';

@Injectable()
export class StudentService {
    constructor(
        @Inject(DrizzleAsyncProvider)
        private readonly db: NodePgDatabase<typeof schema>,
    ){}

    async createStudent(student: CreateStudentDto) {
        return await this.db.insert(schema.student).values(student).returning();
    }

    async getStudents() {
        return await this.db.select().from(schema.student);
    }

    async updateStudent(id: number, student: CreateStudentDto) {
        return await this.db.update(schema.student).set(student).where(eq(schema.student.id, id)).returning();
    }
  
}
