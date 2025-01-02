import { pgTable, serial, varchar, real } from "drizzle-orm/pg-core";

export const student = pgTable('student', {
    id: serial('id').primaryKey(),
    firstName: varchar('first_name'),
    lastName: varchar('last_name'),
    email: varchar('email'),
    contactNo: varchar('contact_no'),
    address: varchar('address'),
    gpa: real('gpa'),
});