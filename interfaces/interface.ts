// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

import {IInterfaceRocket} from "./interfaceRocket";

export interface IData {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    };
    links: {
        article_link: null;
        video_link: string;
    };
    rocket: IInterfaceRocket
}



// 2) протипізувати функції:



// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }


type UserType = {name: string, age: number, gender: string}

const user: UserType = {
    name: 'Max',
    age: 18,
    gender: 'male'
};

// ----------------------------------------

// function sum(a,b){
//     return a+b
// }


type SumType = number

function sum(a: number, b:number): SumType{
    return a+b
}


//----------------------------------------

// function showSum(a,b){
//     console.log(a + b);
// }

function showSum(a: number,b: number):void{
    console.log(a + b);
}


//----------------------------------------

// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }



function incAge(someUser:UserType, inc:number):object{

    someUser.age+=inc

    return someUser
}





console.log(sum(1, 2));
showSum(2,3)
console.log(incAge(user, 2));
