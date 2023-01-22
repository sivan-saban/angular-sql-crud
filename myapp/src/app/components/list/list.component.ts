import { Component } from '@angular/core';
import AccountOperations from 'src/app/model/AccountOperations';
import Types from 'src/app/model/Types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  myAccount:AccountOperations[] = [];
  myTypes:Types[] = [];
  constructor( private prodSrv:ProductService){
    prodSrv.getAllTypes().subscribe(res =>{this.myTypes=res;
   console.log(this.myTypes)
   })
   }
   getActions(type:number){
    this.prodSrv.getActionsByAccount(type).subscribe(res => this.myAccount=res )
  }


}
