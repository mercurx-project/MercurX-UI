import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TasksRoutingModule } from './tasks-routing.module';

import { CreateTagComponent } from './modal/create-tag/create-tag.component';
import { NewTaskComponent } from './modal/new-task/new-task.component';
import { TasksDataComponent } from './tasks-data/tasks-data.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [
    TasksComponent,
     TasksDataComponent,
     NewTaskComponent,
     CreateTagComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
  ]
})
export class TasksModule { }
