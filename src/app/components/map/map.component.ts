import { Component } from '@angular/core';
import * as d3 from 'd3';
import { StatesService } from 'src/app/services/states.service';

import * as topojson from 'topojson-client';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  states: any[];

  constructor(statesService: StatesService) {
    this.states = statesService.getStates();
    console.log(this.states);
  }

  ngOnInit() {
    const svg = d3.select('svg');

    const projection = d3.geoMercator().scale(500).translate([900, 100]);

    let path = d3.geoPath().projection(projection);

    this.states.forEach((state: any) => {
      d3.json(`assets/states${state.topojson}`).then((data: any) => {
        console.log(data);
        var states = topojson.feature(data, data.objects.state);

        const g = svg.append('g').attr('fill', '#000');

        g.append('path').datum(states).attr('d', path).attr('class', 'state');
        console.log(states);
      });
    });
  }
}
