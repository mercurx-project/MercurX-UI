import { Component, Input, SimpleChanges } from "@angular/core";
import * as data from "../../../shared/data/data/tasks/tasks";

@Component({
  selector: "app-tasks-data",
  templateUrl: "./tasks-data.component.html",
  styleUrls: ["./tasks-data.component.scss"],
})

export class TasksDataComponent {

  public tasks = data.tasks;
  public view = data.view;
  public getTaskData: data.tasks;
  @Input() selectedId: number;
  @Input() status: boolean;

  ngOnInit() {
    this.view.map((data) => {
      if (data.status) {
        this.getTaskData = data;
      }
    });
    this.tasks.map((data) => {
      if (data.status) {
        this.getTaskData = data;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let id = changes['selectedId']?.currentValue;
    this.view.map((data) => {
      if (data.title_id === id) {
        this.getTaskData = data;
      }
    })

    let tagsid = changes['selectedId']?.currentValue;
    this.tasks.map((data) => {
      if (data.title_id === tagsid) {
        this.getTaskData = data;
      }
    })
  }
}
