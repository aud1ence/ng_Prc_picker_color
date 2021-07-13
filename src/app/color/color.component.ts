import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  red = '110';
  blue = '110';
  green = '110';
  // rgb = [this.red,this.green,this.blue];

  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  changeRed(value) {
    this.red = value;
    console.log(this.red);
  }

  // @ts-ignore
  changeGreen(value) {
    this.green = value;
    console.log(this.green);

  }

  // @ts-ignore
  changeBlue(value) {
    this.blue = value;
    console.log(this.blue);
  }

  getColorString(): string {
    return 'rgb('+this.red+','+ this.green+','+ this.blue+')';
  }


}
