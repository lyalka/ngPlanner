import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "planner-app",
    template: `
        <div class="app-root" [ngClass]="'loaded'">
            <h1> Projects </h1>
        </div>`,
})
export class PlannerAppComponent {

}
