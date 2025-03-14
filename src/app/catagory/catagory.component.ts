import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { data } from '../data';
import { CommonModule } from '@angular/common';
import { dataservice } from '../data.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterLink],
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})


export class CatagoryComponent implements OnDestroy,OnInit  {
  @ViewChild('selectedStatus', { static: false }) selectedStatus!: ElementRef;
  @Input() data!: data;
  style = "";
  status = "";
  yearissue = "";
  sortby = "";
  filteredData: data[] = [];
  constructor(private dataService: dataservice) { }
  /* กำหนดค่าให้กับค่าของform */
  formstyle: FormGroup = new FormGroup({
    stylemanhwa: new FormControl(null),
    status: new FormControl(null),
    yearissue: new FormControl(null),
    sortby: new FormControl(null)
  });

  setvaluestyle(name: string) {
    this.formstyle.patchValue({
      stylemanhwa: name
    })
    console.log(this.formstyle.get('stylemanhwa')?.value)
    this.style = name;
    console.log(this.style)
    this.filtermanhwa();
    this.scrollToResult();
    return this.formstyle.get('stylemanhwa')?.value;
  };
  setvaluestatus(status: string) {
    this.formstyle.patchValue({
      status: status
    })
    this.status = status;
    this.filtermanhwa();
    this.scrollToResult();
    return this.formstyle.get('status')?.value;
  };
  setvalueyearissue(year: string) {
    this.formstyle.patchValue({
      yearissue: year
    })
    this.yearissue = year;
    this.filtermanhwa();
    this.scrollToResult();
    return this.formstyle.get('yearissue')?.value;
  };

  setsort(sortby: string) {
    this.formstyle.patchValue({
      sortby: sortby
    })
    this.sortby = sortby;
    this.filtermanhwa();
    this.scrollToResult();
    return this.formstyle.get('sortby')?.value;
  };


  /* ตรวจสอบการกดปุ่มเลือกประเภท */
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
  /*  ฟังชั่นฟิลเตอร์ */
  filtermanhwa() {
    const alldata = this.dataService.datalist;
    let filtered = alldata; // เริ่มต้นด้วยข้อมูลทั้งหมด
  
    // ดึงค่าจากฟอร์ม
    const styleValue = this.formstyle.get('stylemanhwa')?.value;
    const statusValue = this.formstyle.get('status')?.value;
    const yearValue = this.formstyle.get('yearissue')?.value;
  
    // กรองตาม style ถ้าไม่ได้เลือก "ทั้งหมด"
    if (styleValue !== 'ทั้งหมด') {
      filtered = filtered.filter(item => item.style === styleValue);
    } // ถ้าเลือก "ทั้งหมด" จะไม่กรองในส่วนนี้
  
    // กรองตาม status ถ้าไม่ได้เลือก "ทั้งหมด"
    if (statusValue !== 'ทั้งหมด') {
      filtered = filtered.filter(item => item.status === statusValue);
    } // ถ้าเลือก "ทั้งหมด" จะไม่กรองในส่วนนี้
  
    // กรองตาม year ถ้าไม่ได้เลือก "ทั้งหมด"
    if (yearValue !== 'ทั้งหมด') {
      const yearNum = parseInt(yearValue, 10);
      filtered = filtered.filter(item => item.year === yearNum);
    } // ถ้าเลือก "ทั้งหมด" จะไม่กรองในส่วนนี้
  
    // จัดเรียงข้อมูลตามปี หาก sortby เป็น "ล่าสุด"
    if (this.sortby === 'ล่าสุด') {
      filtered = filtered.sort((a, b) => b.year - a.year);
    }
  
    // กำหนดข้อมูลที่กรองแล้วให้กับ filteredData
    this.filteredData = filtered;
  }
  /* ฟังก์ชั่นดึงหน้าจอมาตามการกดเลือก */
  scrollToResult() {
    if (this.selectedStatus) {
      setTimeout(() => {
        this.selectedStatus.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // เลื่อนไปตำแหน่งบนสุด
  }
  ngOnInit(): void { /* เริ่มหน้า */
    this.scrollToTop(); 
  }
  ngOnDestroy(): void {/* ออกหน้า */
    
    this.scrollToTop();
  }
}