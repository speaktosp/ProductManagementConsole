import { Component, OnInit, ViewChild} from '@angular/core';

import { ProductService } from '../../services/product.service';

import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  date: any;
  isActive: boolean = false;
  product: Product;
  showUserForm: boolean = false;
  @ViewChild('productForm') form: any;

  isNew: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Subscribe to the selectedProduct observable
    this.productService.selectedProduct.subscribe(product => {
      if(product.id !== null) {
        this.isNew = false;
        this.product = product;
        this.product.isActive = true;
      }
    });
    this.clearState();
  }

  onSubmit({value, valid}: {value: Product, valid: boolean}) {
    if(!valid){
      console.log('Form is not valid');
      return;
    }
    const IMAGE_URL = 'https://picsum.photos/400?product';
    // Check if new product
    if(this.isNew) {
      value.id = this.generateId();
      value.date = new Date();
      value.image = IMAGE_URL+ Math.floor(Math.random() * 1060) + 1;

      // Add product
      this.productService.addProduct(value);
    } else {
      value.date = new Date();
      value.image = IMAGE_URL+ Math.floor(Math.random() * 1060) + 1;
      // Update product
      this.productService.updateProduct(value);
    }
    this.clearState();
  }

  clearState() {
    this.product = {
      id: '',
      sku: undefined,
      name: '',
      description: '',
      brand: '',
      isActive : true,
      date: ''
    };
    this.isNew = true;
    this.form.reset();
    this.productService.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
