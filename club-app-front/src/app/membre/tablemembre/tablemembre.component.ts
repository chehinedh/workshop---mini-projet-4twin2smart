import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';

import { membre } from 'src/app/models/membre';
import { MembreserviceService } from 'src/app/shared/membreservice.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-tablemembre',
  templateUrl: './tablemembre.component.html',
  styleUrls: ['./tablemembre.component.css']
})
export class TablemembreComponent implements OnInit {
  @ViewChild('law') lawlaw
  membre2=new membre();
  momb = new membre();
  showit:Boolean=true;
  lawej:String;
  lawejtype:String;
  listmembres:membre[];
  jari:String;
 @Output() ajouterget = new EventEmitter 
  
  constructor(private membreservice:MembreserviceService) { }
  @Output() 
  ngOnInit(): void {
    this.membreservice.getallmembres().subscribe(data=>{this.listmembres=data
    console.log(this.listmembres)
    })
     this.lawejtype=""
     this.lawej=""
    
    
  }
  getcolormembre(r :String){
      if (r==='President')
      return ' #88d8b0'
      if (r==='Membre')
      return '#2ab7ca'
      else return '#0057e7'
  }
  deletemembre1(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deletemembre(id)
        Swal.fire(
          
          'Deleted!',
        'Your file has been deleted.',
          'success',
          setTimeout(() => {
            
          window.location.reload()
          }, 1000),
          
        )
      }
    })
  }
  deletemembre(id:number){
    console.log(id);
      this.membreservice.deletemembre(id).subscribe(data=>{console.log(data)
      })
   
     

  }
  saveinput(momb :membre){
    this.showit=true;
      this.momb=momb;
      
  }

  changeit(event:any){
    this.showit=false;
    console.log(this.showit)
  }

  changelawejtype(){
    console.log(this.lawlaw.nativeElement.value)
    this.lawejtype=this.lawlaw.nativeElement.value

  }
}
