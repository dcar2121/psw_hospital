import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ToastrModule } from "ngx-toastr";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { SidebarComponentA } from "../homepage/components/sidebar/sidebar.component";
import { FeedbackComponent } from "../feedback/feedback.component";
import { ViewfeedbackComponent } from "../viewfeedback/viewfeedback.component";
import { HomepageLayoutRoutes } from "./homepage-layout.routing";


@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(HomepageLayoutRoutes),
        ToastrModule.forRoot()
    ],
    declarations: [
        NavbarComponent,
        SidebarComponentA,
        FeedbackComponent,
        ViewfeedbackComponent
    ],
    exports: [
        NavbarComponent,
        SidebarComponent,
        FeedbackComponent
    ]
})

export class HomepageLayoutModule { }


