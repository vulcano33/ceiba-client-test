import { RouterModule, Routes, Router} from '@angular/router';
import {ListRegistroComponent} from "./list-registro/list-registro.component";
import {AddRegistroComponent} from "./add-registro/add-registro.component";

const routes: Routes = [
    {path: 'list-registro', component: ListRegistroComponent},
    {path: 'add-registro', component: AddRegistroComponent},
    { path: '', redirectTo: '/list-registro', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);