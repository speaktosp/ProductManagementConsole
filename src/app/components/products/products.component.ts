import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  loaded: boolean = false;
  showExtended: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.stateClear.subscribe(clear => {
      if(clear) {
        this.selectedProduct = {id: '', name: '', sku: -1, description: '', brand:'', image: '', date: '', isActive: false};
      }
    });

    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.loaded = true;
    });
  }

  onSelect(product: Product) {
    this.productService.setFormProduct(product);
    this.selectedProduct = product;
  }

  onDelete(product: Product) {
    if(confirm('Are you sure?')){
      this.productService.deleteProduct(product);
    }
  }

  setCurrentClasses() {
    this.currentClasses = { 
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
