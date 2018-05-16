import { Injectable } from '@angular/core';


import { Product } from '../models/Product';
import { Observable, of, BehaviorSubject } from 'rxjs';



@Injectable()
export class ProductService {
  products: Product[];

  private productSource = new BehaviorSubject<Product>({id: '', name: '', sku: -1, description: '', brand:'', image: '', date: '', isActive: false});
  selectedProduct = this.productSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.products = [
    //   {id: '1', text: 'Generated components', date: new Date('12/26/2017 12:54:23')},
    //   {id: '2', text: 'Added Bootstrap', date: new Date('12/27/2017 9:33:13')},
    //   {id: '3', text: 'Added products component', date: new Date('12/27/2017 12:00:23')}
    // ]

    this.products = [];
  }

  getProducts(): Observable<Product[]> {
    if(localStorage.getItem('products') === null) {
      this.products = [];
    } else {
      this.products = JSON.parse(localStorage.getItem('products'));
    }

    return of(this.products.sort((a, b) => {
      return b.date = a.date;
    }));
  }

  setFormProduct(product: Product) {
    this.productSource.next(product);
  }

  addProduct(product: Product) {
    this.products.unshift(product);

    // Add to local storage
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  updateProduct(product: Product) {
    this.products.forEach((cur, index) => {
      if(product.id === cur.id) {
        this.products.splice(index, 1);
      }
    });
    this.products.unshift(product);

    // Update local storage
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getProduct(id: number) :Product {
    if(localStorage.getItem('products') === null) {
      this.products = [];
    } else {
      this.products = JSON.parse(localStorage.getItem('products'));
    }

    let returnProduct = this.products.filter((prod) => {
      return prod.id == id;
    });
    return returnProduct && returnProduct.length > 0? returnProduct[0]: {};
  }

  deleteProduct(product: Product) {
    this.products.forEach((cur, index) => {
      if(product.id === cur.id) {
        this.products.splice(index, 1);
      }
    });

    // Delete from local storage
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  clearState() {
    this.stateSource.next(true);
  }

}
