import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent  {
  @Output() sendTask = new EventEmitter();

  submitForm(description: string, priority: number) {
   let newTask: Task = new Task(description, priority);
 }

}
