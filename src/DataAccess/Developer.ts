/**
 * Developer Main Class
 */
export class Developer {
  Name: string;
  Favorite_Food: string;
  Favorite_Movie: string;
  Status: string;
  Current_Date:string

  constructor(Name: string, Favorite_Food:string, Favorite_Movie:string, Status:string, Current_Date:string =  null) {
    this.Name = Name;
    this.Favorite_Food = Favorite_Food
    this.Favorite_Movie = Favorite_Movie
    this.Status = Status
    this.Current_Date = Current_Date
  }
 
}