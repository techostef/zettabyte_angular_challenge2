import { MentorService } from './services/mentor.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import IMentor from './mentor.interface'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import keyFilterMentor from './enum/keyFilterMentor.enum';
import { DialogEditorMentorComponent } from './components/dialog-editor-mentor/dialog-editor-mentor.component';
import { DialogConfirmRemoveComponent } from './components/dialog-confirm-remove/dialog-confirm-remove.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // animation triggers go here
  ]
})

export class AppComponent implements AfterViewInit {
  dataSource: any;
  _mentorsSubscribe: any;
  // dataSource: any = {};
  filterColumn: any = {
    name: '',
    userType: '',
    entity: '',
    status: '',
  };
  displayedColumns = [
    'fullname', 
    'userType',
    'companyName',
    'status',
    'actions',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private mentorService: MentorService, public dialog: MatDialog) { 
    const mentors = mentorService.mentors
    this.dataSource = new MatTableDataSource<IMentor>(mentors);
    mentorService.mentorsChange.subscribe((value) => {
      this.dataSource = new MatTableDataSource<IMentor>(value);
      this.dataSource.paginator = this.paginator; // For pagination
    })

    this.filterColumn = mentorService.filter;
    mentorService.filterChange.subscribe((value) => {
      this.filterColumn = value;
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // For pagination
    // this.dataSource.sort = this.sort; // For sort
  }

  onChangeFilterName(value): void {
    this.mentorService.updateFilter(keyFilterMentor.name, value);
  }

  onChangeFilterUserType(value): void {
    this.mentorService.updateFilter(keyFilterMentor.userType, value);
  }

  onChangeFilterEntity(value): void {
    this.mentorService.updateFilter(keyFilterMentor.entity, value);
  }

  onChangeFilterStatus(value): void {
    this.mentorService.updateFilter(keyFilterMentor.status, value);
  }

  onResetFilter(): void {
    this.mentorService.resetFilter();
  }

  openDialogEditor(element?: any): void {
    this.dialog.open(DialogEditorMentorComponent, {
      data: {
        animal: 'panda',
        item: element,
      }
    });
  }

  openDialogRemoveItem(element?: any): void {
    this.dialog.open(DialogConfirmRemoveComponent, {
      data: {
        animal: 'panda',
        item: element,
        onConfirm: () => this.mentorService.removeItemMentor(element)
      }
    });
  }
}

