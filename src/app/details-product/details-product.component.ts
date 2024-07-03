import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit{
  product: any;
  currentImageIndex: number = 0;

  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;
      });
    }

    this.nextImage();
  }

  nextImage(): void {
    if (this.product && this.product.images) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  }
}
