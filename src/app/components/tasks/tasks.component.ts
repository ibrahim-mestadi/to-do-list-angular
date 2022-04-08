import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []
  constructor(private taskService: TaskService ) { }

  ngOnInit(): void {
    this.getTasks() ;
  }

  getTasks() {
    this.taskService.findAll().subscribe(tasks => this.tasks = tasks)
  }

}
