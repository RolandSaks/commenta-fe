import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private api: String = environment.api;

  constructor(private http: HttpClient) { }

  getComments(api: string): Observable<any[]> {
    return this.http.get<Comment[]>(api).pipe(
      catchError(this.handleError('getComments', []))
    );
  }

  getCommentsTop10() {
    return this.getComments(this.api + 'getTop10ReactedComments');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("Server ei ole kättesaadav.");
      return of(result as T);
    };
  }
}
