import { Department } from "./department";

export class Course {
    constructor(public id: number, public name: string, public links: string, public department: Department) {

    }
}
