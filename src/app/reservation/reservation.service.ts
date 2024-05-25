import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3000";
  private reservations: Reservation[] = [];

  // constructor(){
  //   let savedReservations = localStorage.getItem("reservations");
  //   this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  // }

  constructor(private http: HttpClient) { }

  // getReservations(): Reservation[] {
  //   return this.reservations;
  // }

  // getReservation(id: string): Reservation | undefined {
  //   return this.reservations.find(res => res.id === id);
  // }

  // addReservation(reservation: Reservation): void {

  //   reservation.id = Date.now().toString();

  //   this.reservations.push(reservation);
  //   localStorage.setItem("reservations", JSON.stringify(this.reservations));
  // }

  // deleteReservation(id: string): void {
  //   let index = this.reservations.findIndex(res => res.id === id);
  //   this.reservations.splice(index, 1)
  //   localStorage.setItem("reservations", JSON.stringify(this.reservations));
  // }

  // updateReservation(id: string, updatedReservation: Reservation): void {
  //   let index = this.reservations.findIndex(res => res.id === id);
  //   this.reservations[index] = updatedReservation;
  //   localStorage.setItem("reservations", JSON.stringify(this.reservations));
  // }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  getReservation(id: string): Observable<Reservation | undefined> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
  }
}
