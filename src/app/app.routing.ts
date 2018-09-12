import { RouterModule, Routes, Router} from '@angular/router';
import {ListRegistroComponent} from "./list-registro/list-registro.component";

const routes: Routes = [
    {path: 'list-registro', component: ListRegistroComponent}
];

export const routing = RouterModule.forRoot(routes);