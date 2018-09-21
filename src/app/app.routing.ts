import { RouterModule, Routes, Router} from '@angular/router';
import {AddRegistroComponent} from './add-registro/add-registro.component';
import {RegistroSalidaComponent} from './registro-salida/registro-salida.component';

const routes: Routes = [
    {path: 'add-registro', component: AddRegistroComponent},
    {path: 'registro-salida', component: RegistroSalidaComponent},
    { path: '', redirectTo: '/add-registro', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes);
