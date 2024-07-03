import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  dataProducts: any[] = [];
  displayedColumns: string[] = ['id', 'images', 'title', 'price', 'brand', 'description', 'details'];
  dataSource = new MatTableDataSource<any>(this.dataProducts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private api_products: ProductsService) { }

  ngOnInit() {
    this.llenar_datos();
  }

  llenar_datos() {
    this.api_products.getListarProductos().subscribe((productsData) => {
      this.dataProducts = Object.values(productsData.products);
      this.dataSource.data = this.dataProducts;
      this.dataSource.paginator = this.paginator;
    });
  }
}
