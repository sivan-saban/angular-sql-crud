import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import AccountOperations from '../model/AccountOperations';
import Types from '../model/Types';

 
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    URL = "http://localhost:3001/account"
    constructor(private http: HttpClient) { }
 
    // Create
    addAction(item: any): Observable<any> {
        return this.http.post<AccountOperations>(this.URL, item);
    }
    // Read
    getActionsByAccount(account:any): Observable<any[]> {
        return this.http.get<AccountOperations[]>(this.URL+"/"+account);
    }
    getAllTypes(): Observable<any[]> {
        return this.http.get<Types[]>(this.URL+"/");
    }
}
