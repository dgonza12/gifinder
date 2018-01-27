import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=82JygqXFZRHZHkDwkQYvyzb7C7N4k5N5&limit=24';
  data: any = {};
  constructor(private http: Http) {
    console.log('Hello Image');
    this.getImages();
    this.getData();
  }
  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }
  getImages() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  searchImages(query) {
    query = query.replace(' ', '%20');
    this.apiUrl = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=82JygqXFZRHZHkDwkQYvyzb7C7N4k5N5&limit=24';
    this.getImages();
    this.getData();
  }
}
