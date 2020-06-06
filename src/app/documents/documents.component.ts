import { Component, OnInit } from '@angular/core';
import {Document} from './documents'
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent  {
  pageTitle:string = "Document Dashboard"

documents :Document[]=[
  {title:"My first doc",
description:"aefwefwefwe",
file_url:"http://google.com",
updated_at:"11/11/16",
image_url:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'},

{title:"My second doc",
description:"aefwefwefwe",
file_url:"http://google.com",
updated_at:"11/11/16",
image_url:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'},

{title:"My third doc",
description:"aefwefwefwe",
file_url:"http://google.com",
updated_at:"11/11/16",
image_url:'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg'}
]


  
}
