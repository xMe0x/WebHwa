import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { data } from '../data';
import { CommonModule } from '@angular/common'; 
import { dataservice } from '../data.service';


@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})


export class CatagoryComponent {
  @Input() data!: data;
  style="";
  status="";
  yearissue="";
  sortby="";
  filteredData: data[] = [];
  constructor(private dataService: dataservice) {}
  /* กำหนดค่าให้กับค่าของform */
   formstyle:FormGroup = new FormGroup({
    stylemanhwa:new FormControl(null),
    status:new FormControl(null),
    yearissue:new FormControl(null),
    sortby:new FormControl(null)
   });
   
   setvaluestyle(name:string){
    this.formstyle.patchValue({
      stylemanhwa:name
    })
    console.log(this.formstyle.get('stylemanhwa')?.value)
    this.style = name;
    console.log(this.style)
    this.filtermanhwa();
    return this.formstyle.get('stylemanhwa')?.value;
   };
   setvaluestatus(status:string){
    this.formstyle.patchValue({
      status:status
    })
    console.log(this.formstyle.get('status')?.value)
    this.status=status;
    this.filtermanhwa();
    return this.formstyle.get('status')?.value;
   };
   setvalueyearissue(year:string){
    this.formstyle.patchValue({
      yearissue:year
    })
    console.log(this.formstyle.get('yearissue')?.value)
    this.yearissue=year;
    this.filtermanhwa();
    return this.formstyle.get('yearissue')?.value;
   };
   
   setsort(sortby:string){
    this.formstyle.patchValue({
      sortby:sortby
    })
    console.log(this.formstyle.get('sortby')?.value)
    this.sortby=sortby;
    this.filtermanhwa();
    return this.formstyle.get('sortby')?.value;
   };
   

   logAllFormValues(): void {
    console.log('Form Values:', this.formstyle.value);
  };

  isHidden(): boolean {
    return !this.style; 
  };
  isHiddenstatus(): boolean {
    return !this.status; 
  };
  isHiddenyear(): boolean {
    return !this.yearissue; 
  };
  isHiddensoryby(): boolean {
    return !this.sortby; 
  };

  filtermanhwa() {
    const alldata = this.dataService.datalist; 
    let filter;
    let filterstyle;
    let year = this.formstyle.get('yearissue')?.value;
    const num = parseInt(year,10);
   if (this.formstyle.get('stylemanhwa')?.value != 'ทั้งหมด') {
    filterstyle = alldata.filter(item => item.style === this.formstyle.get('stylemanhwa')?.value);
    if(this.formstyle.get('status')?.value != 'ทั้งหมด'){
      filter = filterstyle.filter(item => item.status === this.formstyle.get('status')?.value);
    }else{
      filter = filterstyle;
    }
    if(this.formstyle.get('yearissue')?.value != 'ทั้งหมด'){
      filter = filterstyle.filter(item => item.year === num);
    }else{
      filter=filterstyle;
    }
  }else{
    filterstyle = alldata;
    if(this.formstyle.get('status')?.value != 'ทั้งหมด'){
      filter = filterstyle.filter(item => item.status === this.formstyle.get('status')?.value);
    }else{
      filter = filterstyle;
    }
    if(this.formstyle.get('yearissue')?.value != 'ทั้งหมด'){
      filter = filterstyle.filter(item => item.year === num);
    }else{
      filter=filterstyle;
    }
  }
  if (this.sortby === 'ล่าสุด') {
    filter = filter.sort((a, b) => b.year - a.year);
  } 

  this.filteredData = filter;
console.log(filter)

  
}
 
}
