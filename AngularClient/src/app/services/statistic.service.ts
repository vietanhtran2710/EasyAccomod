import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class StatisticService {
    route = 'http://localhost:8080/api/stats'

    constructor(private http: HttpClient) { }

    getPostOrderByColumn(columName: string) {
        return this.http.get(this.route + `/${columName}`)
    }

    getPostOrderByColumInMonthAndYearDESC(column: string, month: number, year: number) {
        return this.http.get(this.route + `/${column}/${month}/${year}`)
    }

    getTimeRangeHasMostPosts() {
        return this.http.get(this.route)
    }
}