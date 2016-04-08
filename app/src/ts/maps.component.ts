import {
  Component, 
  provide
} from 'angular2/core';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
  selector: 'maps',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers:[ ANGULAR2_GOOGLE_MAPS_PROVIDERS],
  styles: [`
    .sebm-google-map-container {
       height: 300px;
       width:500px;
     }
  `],
  template: `
    <sebm-google-map 
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      [disableDefaultUI]="false"
      (mapClick)="mapClicked($event)">
    
      <sebm-google-map-marker 
        *ngFor="#m of markers; #i = index"
        (markerClick)="clickedMarker(m.label, i)"
        [latitude]="m.lat"
        [longitude]="m.lng"
        [label]="m.label"
        [markerDraggable]="m.draggable"
        (dragEnd)="markerDragEnd(m, $event)"></sebm-google-map-marker>
    
    </sebm-google-map>
`})
export class MapComponent {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  
  clickedMarker(label: string, index: number) {
    window.alert(`clicked the marker: ${label || index}`)
    this.markers.splice(index, 1);
  }
  
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

