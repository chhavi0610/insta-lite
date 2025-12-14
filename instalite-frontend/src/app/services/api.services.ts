import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token
      })
    };
  }

  signup(data: any) {
    return this.http.post(this.baseUrl + '/auth/signup', data);
  }

  login(data: any) {
    return this.http.post(this.baseUrl + '/auth/login', data);
  }

  createPost(data: any) {
    return this.http.post(this.baseUrl + '/posts', data, this.getHeaders());
  }

  getFeed() {
    return this.http.get(this.baseUrl + '/feed', this.getHeaders());
  }

  likePost(id: number) {
    return this.http.post(this.baseUrl + '/posts/' + id + '/like', {}, this.getHeaders());
  }

  unlikePost(id: number) {
    return this.http.delete(this.baseUrl + '/posts/' + id + '/unlike', this.getHeaders());
  }

getComments(postId: number) {
  return this.http.get(
    this.baseUrl + '/posts/' + postId + '/comments',
    this.getHeaders()
  );
}

addComment(postId: number, comment: string) {
  return this.http.post(
    this.baseUrl + '/posts/' + postId + '/comment',
    { comment },
    this.getHeaders()
  );
}


  followUser(id: number) {
    return this.http.post(this.baseUrl + '/follow/' + id, {}, this.getHeaders());
  }

  unfollowUser(id: number) {
    return this.http.delete(this.baseUrl + '/follow/' + id, this.getHeaders());
  }
  getUsers() {
  return this.http.get(this.baseUrl + '/users', this.getHeaders());
}
getMyProfile() {
  return this.http.get(this.baseUrl + '/users/me', this.getHeaders());
}

}
