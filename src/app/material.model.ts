import { NgModule } from "@angular/core";


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
    ],
    exports: [
        MatSelectModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class MaterialModule{}