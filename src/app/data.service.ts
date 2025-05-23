
import { data } from './data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  
})
export  class dataservice {
 
  public datalist: data[] = [
    {
        name:'Chronicles of the Demon Faction',
        style:'แอ็กชั่น',
        status:'ยังไม่จบ',
        year:2021,
        photo:`imagetoon/Chronicles-of-the-Demon-Faction.jpg`
    },
    {
        name:'I Raised the Villains Preciously',
        style:'แฟนตาซี',
        status:'ยังไม่จบ',
        year:2019,
        photo:`imagetoon/I-Raised-the-Villains-Preciously.jpg`
    },
    {
        name:'Juvenile Offender',
        style:'ฮาเร็ม',
        status:'จบบริบูรณ์',
        year:2023,
        photo:`imagetoon/Juvenile-Offender.jpg`
    }
    ,
    {
        name:'Solo Max Level Newbie',
        style:'ดราม่า',
        status:'ยังไม่จบ',
        year:2022,
        photo:`imagetoon/Solo-Max-Level-Newbie.jpg`
    }
    ,
    {
        name:'The Poison Master of Sacheon Tang Clan',
        style:'โรแมนซ์',
        status:'ยังไม่จบ',
        year:2018,
        photo:`imagetoon/The-Poison-Master-of-Sacheon-Tang-Clan.jpg`
    }
    ,
    {
        name:'The Extras Academy Survival Guide',
        style:'ฮาเร็ม',
        status:'ยังไม่จบ',
        year:2023,
        photo:`imagetoon/The-Extras-Academy-Survival-Guide.jpg`
    }
    ,
    {
        name:'The Dawn to Come',
        style:'ดราม่า',
        status:'ยังไม่จบ',
        year:2024   ,
        photo:`imagetoon/the-best-school-romance-manhwa-webtoons-you-must-read.jpg`
    }
    ,
    {
        name:'Your Talent is Mine 2',
        style:'แอ็กชั่น',
        status:'ยังไม่จบ',
        year:2023,
        photo:`imagetoon/Your-Talent-is-Mine-2.jpg`
    }

];
}


    