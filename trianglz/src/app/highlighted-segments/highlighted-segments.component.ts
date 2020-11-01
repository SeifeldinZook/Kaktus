import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;

@Component({
  selector: 'app-highlighted-segments',
  templateUrl: './highlighted-segments.component.html',
  styleUrls: ['./highlighted-segments.component.css']
})
export class HighlightedSegmentsComponent implements OnInit {

  images:any;
  constructor(private http: HttpClient){
  }

  ngOnInit() {
    $(document).ready(function() {
      $("#owl-example1").owlCarousel({
        margin:10,
        items:3.5,
        autoplay:true,
        autoplayTimeout:1000,
      });
      $("#owl-example2").owlCarousel({
        margin:10,
        items:3.5,
        autoplay:true,
        autoplayTimeout:1000,
      });    
    }
  )}
}