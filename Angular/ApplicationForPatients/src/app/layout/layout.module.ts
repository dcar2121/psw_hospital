import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ViewfeedbackComponent } from "../viewfeedback/viewfeedback.component";
import { LayoutRoutes } from "./layout.routing";

@NgModule ({
    imports: [
        CommonModule,
        RouterModule.forChild(LayoutRoutes),
    ],
    declarations: [
        ViewfeedbackComponent
    ],
    exports: [
    ]
})

export class LayoutModule { }


