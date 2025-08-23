import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {


  name: string = '';
  description: string = '';
  category: string = '';
  mood: string = 'add';
  tmp: any;
  product: Product[] = [];

  ngOnInit() {
    this.readData();
  }

  addProduct() {
    let new_product: Product = {
      name: this.name,
      description: this.description,
      category: this.category
    };

    if (this.mood === 'add') {
      this.product.push(new_product);
    } else {
      this.product[this.tmp] = new_product;
      this.mood = 'add';
    }

    localStorage.setItem("product", JSON.stringify(this.product));
    this.clear();
    this.readData();
  }

  clear() {
    this.name = "";
    this.description = "";
    this.category = "";
  }

  readData() {
    const storedProducts = localStorage.getItem("product");
    if (storedProducts) {
      this.product = JSON.parse(storedProducts);
    } else {
      this.product = [];
    }
  }

  deleteData(i: number) {
    this.product.splice(i, 1);
    localStorage.setItem("product", JSON.stringify(this.product));
    this.readData();
  }

  updateData(i: number) {
    this.name = this.product[i].name;
    this.description = this.product[i].description;
    this.category = this.product[i].category;
    this.mood = 'update';
    this.tmp = i;
  }
}
