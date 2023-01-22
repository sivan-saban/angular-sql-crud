import { Component } from '@angular/core';
import AccountOperations from 'src/app/model/AccountOperations';
import Types from 'src/app/model/Types';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  myAccount:AccountOperations[] = [];
  myTypes:Types[] = [];
  constructor( private prodSrv:ProductService){
    prodSrv.getAllTypes().subscribe(res =>{this.myTypes=res;
    console.log(this.myTypes)
  })
  }

  addAction(accountNumber:number, types:any,sum:number,interest:number,sum_payments:number){
    let date = new Date().toLocaleDateString();
    console.log(date);
    this.prodSrv.addAction({accountNumber, types,sum,date,interest,sum_payments}).subscribe(res =>console.log(res) )
  }
}
