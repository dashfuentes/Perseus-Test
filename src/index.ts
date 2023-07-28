import {Developer} from './DataAccess/Developer.js'
import { sortBy } from './Utils/Utils.js';

//Creating new instances of the developer class
let rockyObj = new Developer('Rocky', 'Sushi','Back to The Future', 'Inactive');
let miroslavObj = new Developer('Miroslav', 'Sushi','American Psycho', 'Active');
let donnyObj = new Developer('Donny', 'Singapore chow mei fun','The Princess Bride', 'Inactive');
let mattObj = new Developer('Matt', 'Brisket Tacos','The Princess Bride', 'Active');
let carlosObj = new Developer('Carlos', 'Pizza','Halloween', 'Active');

//Making an array of developers
let developerInfo: Developer[] = [rockyObj, miroslavObj,donnyObj, mattObj, carlosObj] 


const printDeveloperStatus = ():void =>{
  developerInfo.forEach(v =>{
  v.Current_Date = new Date().toLocaleDateString();
  if(v.Status === 'Active'){
    console.log(`The following developers are active->Name: ${v.Name} Favorite Movie: ${v.Favorite_Movie} Current_Date: ${v.Current_Date}`)
  }else{
    console.log(`The following developer is inactive-> ${v.Name}`)
  }
});
}
//Executing the function to check active or inactive developers
printDeveloperStatus();

//Invoking a function that allows us to sort an array of objects by any key
let sorting:Developer[] = developerInfo.sort(sortBy('Favorite_Food', false));
console.log(sorting)