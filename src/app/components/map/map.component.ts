import { Component } from '@angular/core';
import * as d3 from 'd3';

import * as topojson from 'topojson-client';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  ngOnInit() {
    const svg = d3.select('svg');

    const projection = d3.geoMercator().scale(500).translate([900, 100]);

    let path = d3.geoPath().projection(projection);

    d3.json('assets/al-state.json').then((data: any) => {
      console.log(data);
      var states = topojson.feature(data, data.objects.state);

      const g = svg.append('g').attr('fill', '#000');

      g.append('path').datum(states).attr('d', path).attr('class', 'state');
      console.log(states);
    });
  }
}
