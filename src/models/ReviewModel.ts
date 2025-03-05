export class ReviewModel {
    id: number;
    userEmail: string;
    book_id: number;
    rating: number;
    reviewDescription: string;
    date: string;

    constructor(id: number, book_id: number, rating: number, reviewDescription: string, userEmail: string, date: string){
        this.id = id;
        this.book_id = book_id;
        this.rating = rating;
        this.reviewDescription = reviewDescription;
        this.userEmail = userEmail; 
        this.date = date;
    }
}