import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LandingpageLayoutComponent } from './landingpage-layout.component';
import { NavigationBarComponent } from "../components/navigation-bar/navigation-bar.component";
@NgModule ({
    imports: [
        CommonModule,
        
    ],
    declarations: [
        NavigationBarComponent,
        LandingpageLayoutComponent
    ],
    exports: [
        NavigationBarComponent,
        LandingpageLayoutComponent
    ]
})

export class LandingpageLayoutModule { }

