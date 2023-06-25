import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public mock: Todo[] = [
    { "title": "Mr", "description": "Lybius torquatus", "completed": false, "archived": false, "endDate": "10/28/2022" },
    { "title": "Mrs", "description": "Zosterops pallidus", "completed": true, "archived": false, "endDate": "12/19/2022" },
    { "title": "Rev", "description": "Anser caerulescens", "completed": true, "archived": true, "endDate": "1/15/2023" },
    { "title": "Mrs", "description": "Naja nivea", "completed": false, "archived": true, "endDate": "4/11/2023" },
    { "title": "Honorable", "description": "Madoqua kirkii", "completed": true, "archived": false, "endDate": "12/21/2022" },
    { "title": "Mr", "description": "Varanus salvator", "completed": false, "archived": true, "endDate": "10/28/2022" },
    { "title": "Ms", "description": "Castor canadensis", "completed": false, "archived": false, "endDate": "6/16/2023" },
    { "title": "Rev", "description": "Hippotragus niger", "completed": false, "archived": true, "endDate": "11/3/2022" },
    { "title": "Mr", "description": "unavailable", "completed": false, "archived": true, "endDate": "11/1/2022" },
    { "title": "Dr", "description": "Varanus sp.", "completed": false, "archived": false, "endDate": "7/12/2022" },
    { "title": "Ms", "description": "Cereopsis novaehollandiae", "completed": true, "archived": false, "endDate": "3/1/2023" },
    { "title": "Ms", "description": "Gerbillus sp.", "completed": false, "archived": false, "endDate": "3/6/2023" },
    { "title": "Ms", "description": "Amphibolurus barbatus", "completed": false, "archived": false, "endDate": "8/30/2022" },
    { "title": "Mrs", "description": "Felis silvestris lybica", "completed": false, "archived": false, "endDate": "9/5/2022" },
  ];
  constructor() {
  }
  private _todoSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(this.mock);
  public getTodos(): Observable<Todo[]> {
    return this._todoSubject.asObservable();
  }

}
