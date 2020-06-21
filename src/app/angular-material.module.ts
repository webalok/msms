import { NgModule } from '@angular/core';

import {MatDialogModule }   from '@angular/material/dialog';
import {MatToolbarModule}   from '@angular/material/toolbar';
import {MatCardModule}      from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}     from '@angular/material/input';
import {MatButtonModule}    from '@angular/material/button';

@NgModule({
   imports: [
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
   ],
   exports: [
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
   ], 
   providers: [
    
   ]
})

export class AngularMaterialModule { }