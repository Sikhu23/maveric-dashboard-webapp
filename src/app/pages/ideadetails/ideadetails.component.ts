import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideadetails',
  templateUrl: './ideadetails.component.html',
  styleUrls: ['./ideadetails.component.css']
})
export class IdeadetailsComponent implements OnInit {
ideaDetails={
  name:"Siddharth",
  time:'09:12, 04-10-2022',
  desc:"Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tricolour.",
  tech:'C++, Solidity, DLT (Theory)',
  duration:"6 Months inclusive of POC and Presentation. Applicable for freshers and experienced associates.",
  ref:"UI/UX for accessibility design, Natural interface for mobile",
  challenges:["Allow access to information for which access could not be granted",
  'Lack of adoption',
  'Skills gap',
 ' Trust among users for newer technology',
  'Financial resources',
  'Interoperability']
}
  constructor() { }

  ngOnInit(): void {
  }

}
