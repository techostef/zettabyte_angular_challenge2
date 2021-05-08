import { ICompany } from './../mentor.interface';
import keyFilterMentor from './../enum/keyFilterMentor.enum';
import { Mentors } from '../mentors';
import { Injectable } from '@angular/core';
import IMentor from '../mentor.interface';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

type typeKeyFilterMentor = keyof typeof keyFilterMentor;

export interface IFilterMentor {
  name?: string,
  userType?: string,
  entity?: string,
  status?: string,
}

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  
  mentors: IMentor[] = []
  filter: IFilterMentor = {};
  constructor() {
    this.mentors = Mentors;
  }
  mentorsChange: Subject<IMentor[]> = new Subject<IMentor[]>();
  filterChange: Subject<IFilterMentor> = new Subject<IFilterMentor>();

  private proceedData(): void {
    const newMentors = Mentors.filter((item) => {
      let valid = true;
      const fullname = item?.first_name + ' ' + item.last_name;
      if (fullname
          .toLocaleLowerCase()
          .indexOf(this.filter?.name?.toLocaleLowerCase() ?? '') === -1)
          return false
      const resultCheckUserType = item?.company?.user_type
      .toLocaleLowerCase()
      .indexOf(this.filter?.userType?.toLocaleLowerCase() ?? '') === -1
      if (resultCheckUserType)
        if (this.filter?.userType.toLocaleLowerCase() !== 'all') 
          return false
      if (item?.company?.name
        .toLocaleLowerCase()
        .indexOf(this.filter?.entity?.toLocaleLowerCase() ?? '') === -1)
        return false
      const resultCheckStatus = item?.user_status
      .toLocaleLowerCase()
      .indexOf(this.filter?.status?.toLocaleLowerCase() ?? '') === -1
      if (resultCheckStatus)
        if (this.filter?.status.toLocaleLowerCase() !== 'all') 
          return false
      return valid;
    })
    this.mentors = newMentors;
    this.mentorsChange.next(newMentors);
  }
  getMentors(): Observable<IMentor[]> {
    const titleCards = of(this.mentors);
    return titleCards;
  }
  getCategoryUserType(): any[] {
    let company = new Set();
    for(let i = 0; i < Mentors.length; i ++) {
      const item: ICompany = Mentors[i].company;
      company.add(item.user_type);
    }
    const result: any[] = Array.from(company);
    return result;
  }
  getCategoryStatus(): any[] {
    let company = new Set();
    for(let i = 0; i < Mentors.length; i ++) {
      const item: IMentor = Mentors[i];
      company.add(item.user_status);
    }
    const result: any[] = Array.from(company);
    return result;
  }
  updateFilter(key: typeKeyFilterMentor | string, search: string): void {
    this.filter[key] = search;
    this.filterChange.next(this.filter)
    console.log('this.filter', this.filter)
    this.proceedData()
  }
  resetFilter(): void {
    this.filter = {};
    this.filterChange.next(this.filter)
    console.log('this.filter', this.filter)
    this.proceedData()
  }
  addItemMentor(item: IMentor): void {
    const newMentors = this.mentors.map((item) => ({ ...item}))
    newMentors.push(item);
    this.mentors = newMentors;
    this.mentorsChange.next(newMentors);
  }
  removeItemMentor(item: IMentor): void {
    const newMentors = this.mentors.map((item) => ({ ...item}))
    const findIdx = this.mentors.findIndex((itemMentor) => item._id === itemMentor._id)
    if (findIdx >= 0) {
      newMentors.splice(findIdx, 1);
      this.mentors = newMentors;
      this.mentorsChange.next(newMentors);
    }
  }
  updateItemMentor(item: IMentor): void {
    const newMentors = this.mentors.map((item) => ({ ...item}))
    const findIdx = this.mentors.findIndex((itemMentor) => item._id === itemMentor._id)
    if (findIdx >= 0) {
      newMentors[findIdx] = item;
      this.mentors = newMentors;
      this.mentorsChange.next(newMentors);
    }
  }
  checkIsEmailAvailable(email: string): boolean {
    const findIdx = Mentors.findIndex((item) => item.email.toLocaleLowerCase() === email.toLocaleLowerCase())
    return findIdx === -1;
  }
  getCategoryCompanyName(): any[] {
    let company = new Set();
    for(let i = 0; i < Mentors.length; i ++) {
      const item: ICompany = Mentors[i].company;
      company.add(item.name);
    }
    const result: any[] = Array.from(company);
    return result;
  }
}
