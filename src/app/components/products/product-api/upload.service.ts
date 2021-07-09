import { catchError } from 'rxjs/operators';
import { FilesType } from './../product-img/files.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:8080';


  constructor( private http: HttpClient, private snackbar: MatSnackBar){}

  showMessage(msg: string): void{
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
  // return all list files
  getAllFiles(): Observable<FilesType[]> {
    return this.http.get<FilesType[]>(`${this.baseUrl}/test`);
  }

  // file per id
  getPerId(id: string): Observable<FilesType> {
    return this.http.get(`${this.baseUrl}`);
  }

  // define function to upload files
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  deleteFileById(id: string): Observable<FilesType> {
    const url = `${this.baseUrl}/test/${id}`;
    console.log(url);
    return this.http.delete<FilesType>(url).pipe(
      catchError(e => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um error!');
    return EMPTY;
  }
}
