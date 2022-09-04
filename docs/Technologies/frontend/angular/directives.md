# Directives

## `ngStyle`

- allow inline styling

```html
<button [ngStyle]="{ 'background-color': 'white' }" class="btn">text</button>
```

## `*ngFor`

- allows looping of array

### parent

#### tasks.component.ts

```ts
import {Component, OnInit} from "@angular/core";
import {Task} from "src/app/Task";
import {TASKS} from "src/app/mock-tasks";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
```

#### tasks.component.html

```html
<app-task-item *ngFor="let task of tasks" [task]="task"> </app-task-item>
```

### child

#### task-item.component.ts

```ts
import {Component, OnInit, Input} from "@angular/core";
import {Task} from "src/app/Task";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;

  constructor() {}

  ngOnInit(): void {}
}
```

#### task-item.component.html

```html
<div class="task">
  <h3>{{ task.text }}</h3>
  <p>{{ task.day }}</p>
</div>
```

## `ngClass`

- Adds and removes CSS classes on an HTML element

### task-item.component.html

```html
<!-- when task.reminder is true, reminder-class css class style will be activated-->
<div [ngClass]="{ reminder-class: task.reminder }" class="task">
  <h3>{{ task.text }}</h3>
  <p>{{ task.day }}</p>
</div>
```

### task-item.component.ts

```ts
import {Component, OnInit, Input} from "@angular/core";
import {Task} from "src/app/Task";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;

  constructor() {}

  ngOnInit(): void {}
}
```

### task-item.component.css

```css
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder-class {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

## `ngModel`

- Creates a FormControl instance from a domain model and binds it to a form control element

### app.module.ts

```ts
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {AddTaskComponent} from "./components/add-task/add-task.component";

@NgModule({
  declarations: [AppComponent, AddTaskComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### add-task.component.ts

```ts
import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
```

### add-task.component.html

```html
<form class="add-form">
  <div class="form-control">
    <label for="text">Task</label>
    <input
      type="text"
      name="text"
      [(ngModel)]="text"
      id="text"
      placeholder="Add Task"
    />
  </div>
  <div class="form-control">
    <label for="day">Day & Time</label>
    <input
      type="text"
      name="day"
      [(ngModel)]="day"
      id="day"
      placeholder="Add Day & Time"
    />
  </div>
  <div class="form-control form-control-check">
    <label for="reminder">Set Reminder</label>
    <input
      type="checkbox"
      name="reminder"
      [(ngModel)]="reminder"
      id="reminder"
    />
  </div>
  <input type="submit" value="Save Task" class="btn btn-block" />
</form>
```

## `ngSubmit`

### parent

#### tasks.component.html

```html
<app-add-task (onAddTask)="addTask($event)"></app-add-task>
```

#### tasks.component.ts

```ts
import {Component, OnInit} from "@angular/core";
import {TaskService} from "src/app/services/task.service";
import {Task} from "src/app/Task";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask(task: Task) {
    // adds task to backend server
    this.taskService
      .addTask(task)
      .subscribe((task: Task) => this.tasks.push(task));
  }
}
```

### child

#### add-task.component.html

```html
<form class="add-form" (ngSubmit)="onSubmit()">
  <div class="form-control">
    <label for="text">Task</label>
    <input
      type="text"
      name="text"
      [(ngModel)]="text"
      id="text"
      placeholder="Add Task"
    />
  </div>
  <input type="submit" value="Save Task" class="btn btn-block" />
</form>
```

#### add-task.component.ts

```ts
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Task} from "src/app/Task";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  @Output()
  onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert("Please add a task!");
      return;
    }

    const newTask = {
      text: this.text,
    };

    this.onAddTask.emit(newTask);

    // reset input value
    this.text = "";
  }
}
```

## `*ngIf`

- A structural directive that conditionally includes a template based on the value of an expression coerced to Boolean
  - When the expression evaluates to true, Angular renders the template provided in a then clause, and when false or null, Angular renders the template provided in an optional else clause
  - The default template for the else clause is blank

### add-task.component.html

- do not show form when `showAddTask` is false

```html
<form *ngIf="showAddTask" class="add-form">
  <div class="form-control">
    <label for="text">Task</label>
    <input
      type="text"
      name="text"
      [(ngModel)]="text"
      id="text"
      placeholder="Add Task"
    />
  </div>
</form>
```

### add-task.component.ts

```ts
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Subscription} from "rxjs";
import {UiService} from "src/app/services/ui.service";
import {Task} from "src/app/Task";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  @Output()
  onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value: boolean) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
}
```
