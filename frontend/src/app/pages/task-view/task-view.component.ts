import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[]; 
  tasks: Task[]; 

  selectedListId: string; 

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params); 
        this.selectedListId = params.listId; 
        this.taskService.getTasks(params.listId).subscribe((tasks: any) => {
          this.tasks = tasks; 
        })
      }

    )

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists; 
    })
  }

  createNewList() {
    this.taskService.createList("testing").subscribe((response: any) => {
      console.log(response); 
    }); 
  }

  onTaskClick(task: Task) {
    // we want to set the task to completed 
    this.taskService.complete(task).subscribe(() => {
      console.log("Completed successfully!"); 
      // the task has been set to completed successfully 
      task.completed = !task.completed; 
    }); 
  }

  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.router.navigate(['/lists']);
      console.log(res);
    })
  }

  onDeleteTaskClick(id: string) {
    this.taskService.deleteTask(this.selectedListId, id).subscribe((res: any) => {
      this.tasks = this.tasks.filter(val => val._id !== id);
      console.log(res);
    })
  }

}
