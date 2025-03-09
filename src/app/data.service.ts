
import { data } from './data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})
export  class dataservice {
 
  public datalist: data[] = [
    {
        name:'Chronicles-of-the-Demon-Faction',
        style:'แอ็กชั่น',
        status:'ยังไม่จบ',
        year:2021,
        photo:`imagetoon/Chronicles-of-the-Demon-Faction.jpg`
    },
    {
        name:'I-Raised-the-Villains-Preciously',
        style:'แฟนตาซี',
        status:'ยังไม่จบ',
        year:2019,
        photo:`imagetoon/I-Raised-the-Villains-Preciously.jpg`
    },
    {
        name:'Juvenile-Offender',
        style:'ฮาเร็ม',
        status:'จบบริบูรณ์',
        year:2023,
        photo:`imagetoon/Juvenile-Offender.jpg`
    }
    ,
    {
        name:'Solo-Max-Level-Newbie',
        style:'ดราม่า',
        status:'ยังไม่จบ',
        year:2022,
        photo:`imagetoon/Solo-Max-Level-Newbie.jpg`
    }

];
}


    