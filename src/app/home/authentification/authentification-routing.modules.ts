import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AuthentificationComponent} from './authentification.component'
const routes: Routes = [
    { path: "", component: AuthentificationComponent}

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class ContentRoutingModule { }