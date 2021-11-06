import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { FeedbackComponent } from "../feedback/feedback.component";
import { ViewfeedbackComponent } from "../viewfeedback/viewfeedback.component";
import { LayoutRoutes } from "./layout.routing";

@NgModule ({
    imports: [
        CommonModule,
        RouterModule.forChild(LayoutRoutes),
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
        FeedbackComponent,
        ViewfeedbackComponent
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        FeedbackComponent
    ]
})

export class LayoutModule { }


