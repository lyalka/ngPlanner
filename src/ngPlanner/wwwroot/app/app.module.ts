import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PlannerAppComponent } from "./planner-app.component";

@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        PlannerAppComponent,
    ],
    exports: [],
    providers: [],
    bootstrap: [ PlannerAppComponent ],
})
export class AppModule {}
