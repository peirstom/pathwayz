import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataService, Product, User } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare const google: any;

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  public supplier: User;
  public products: Product[];
  public submitting = false;
  closeResult: string;
  @ViewChild('contactModal')
  public contactModal: TemplateRef<any>;
  constructor(private route: ActivatedRoute, private dataService: DataService, private modalService: NgbModal) {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('id')) {
        const userId = params.get('id');
        this.supplier = this.dataService.getSupplierById(userId);
        this.products = this.dataService.getProductsOfSupplier(this.supplier.id);
        console.log('supplier', this.supplier);
      }
    });
  }

  ngOnInit() {
    let map = document.getElementById('map-canvas');
    let lat = map.getAttribute('data-lat');
    let lng = map.getAttribute('data-lng');

    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [
        {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},
        {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
        {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
        {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
        {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
        {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
        {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
        {"featureType":"water","elementType":"all","stylers":[{"color":'#5e72e4'},{"visibility":"on"}]}]
    }

    map = new google.maps.Map(map, mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });

    var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
      '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
  }

  close(){
    this.modalService.dismissAll();
  }

  openContactModal() {
    const content = this.contactModal;
    this.modalService.open(content, { windowClass: 'modal-mini', size: 'lg', centered: true }).result.then((result) => {
      this.closeResult = 'Closed with: $result';
    }, (reason) => {
      this.closeResult = 'Dismissed $this.getDismissReason(reason)';
    });
  }

  send(){
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.close();
    }, 400);
  }


}
