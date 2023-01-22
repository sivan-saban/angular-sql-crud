import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import AccountOperations from './model/AccountOperations';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myAccount:AccountOperations[] = [];
  constructor(private prodSrv:ProductService){
    prodSrv.getAllTypes().subscribe(res => console.log(this.myAccount))
  }
  
}
