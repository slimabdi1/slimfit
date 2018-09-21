import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent} from './content.component'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuidlinesComponent} from './guidlines/guidlines.component';
 import {SettingsComponent} from './settings/settings.component';
 import {PicturesComponent} from './pictures/pictures.component'
 import { WebcamModule} from './webcam/webcam.module';



const routes: Routes = [
    { path: "", component: ContentComponent },
    { path : "guidlines" , component : GuidlinesComponent},
    {path : "settings" , component : SettingsComponent},
     { path :"pictures" , component :PicturesComponent}
];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class ContentRoutingModule { }