import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: string;
  sku: number;
  name: string;
  description: string;
  brand: string;
  date: any;
  isActive: boolean = false;

  isNew: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Subscribe to the selectedProduct observable
    this.productService.selectedProduct.subscribe(product => {
      if(product.id !== null) {
        this.isNew = false;
        this.id = product.id;
        this.name = product.name;
        this.date = product.date;
        this.isActive = true;
      }
    });
  }

  onSubmit() {
    const IMAGE_URL = 'https://picsum.photos/400?product';
    // Check if new product
    if(this.isNew) {
      // Create a new product
      const newProduct = {
        id: this.generateId(),
        name: this.name,
        sku: this.sku ? this.sku: Math.floor(Math.random() * 1060) + 1,
        description: this.description ? this.description : this.randomString(40),
        brand: this.brand ? this.brand : this.randomString(10),
        date: new Date(),
        image: IMAGE_URL+ Math.floor(Math.random() * 1060) + 1,
        isActive: (Math.floor((Math.random() * 10) + 1) > 5)
      };
      // Add product
      this.productService.addProduct(newProduct);
    } else {
      // Create product to be updated
      const updProduct = {
        id: this.id,
        name: this.name,
        sku: this.sku ? this.sku: Math.floor(Math.random() * 1060) + 1,
        description: this.description ? this.description : this.randomString(40),
        brand: this.brand ? this.brand : this.randomString(10),
        date: new Date(),
        image: IMAGE_URL+ Math.floor(Math.random() * 1060) + 1,
        isActive: (Math.floor((Math.random() * 10) + 1) > 5)
      }
      // Update product
      this.productService.updateProduct(updProduct);
    }

    // Clear state
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = '';
    this.name = '';
    this.date = '';
    this.isActive = false;
    this.productService.clearState();
  }

  randomString(length) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
