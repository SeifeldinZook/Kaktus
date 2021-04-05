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
        items:1,
        autoWidth: true,
        loop:true,
        margin:15,
        autoplay:true,  
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        mergeFit: false,
        smartSpeed: 500
      });
      $("#owl-example2").owlCarousel({
        items:1,
        autoWidth: true,
        loop:true,
        margin:15,
        autoplay:true,  
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        mergeFit: false,
        smartSpeed: 500
      });    
    }
  )}
}