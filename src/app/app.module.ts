import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderFilterComponent } from './components/header-filter/header-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogEditorMentorComponent } from './components/dialog-editor-mentor/dialog-editor-mentor.component';
import { DialogBravoComponent } from './components/dialog-bravo/dialog-bravo.component';
import { DialogConfirmRemoveComponent } from './components/dialog-confirm-remove/dialog-confirm-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderFilterComponent,
    DialogEditorMentorComponent,
    DialogBravoComponent,
    DialogConfirmRemoveComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
