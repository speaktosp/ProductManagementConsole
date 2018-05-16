import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';
import { ProductService } from '../../services/product.service';

import { Product } from '../../models/Product';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(id);
  }

}
