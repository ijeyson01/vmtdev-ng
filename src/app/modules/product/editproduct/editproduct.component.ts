import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styles: ``
})
export class EditproductComponent implements OnInit {
  

  route = inject(ActivatedRoute);
  
  productid!: number;

  ngOnInit(): void {
    this.productid = Number(this.route.snapshot.paramMap.get('productid'));
  }
}
