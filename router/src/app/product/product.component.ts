import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;

  private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    /*参数模式传递参数  接受方法
    this.productId = this.routeInfo.snapshot.queryParams['id'];
    */

    /*URL模式传递参数  接受方法  参数快照
    this.productId = this.routeInfo.snapshot.params['id'];
    */

    /*URL模式传递参数  接受方法  参数订阅
    this.routeInfo.params.subscribe((params: Params) => {this.productId = params['id']; });
    */

    /* resolve传递回来的参数*/
    this.routeInfo.data.subscribe((data: {product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }

}


export class Product {
  constructor(public  id: number, public name: string) {}
}
