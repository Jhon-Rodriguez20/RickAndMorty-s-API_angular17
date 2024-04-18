import { Component, OnInit, inject } from '@angular/core';
import { Result } from '../../models/personaje.model';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit {

  personajeList: Result[] = [];
  // private router = inject(Router);
  // private apiService = inject(ApiServiceService);
  constructor(
    private router: Router,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    // this.apiService.getPersonajes().subscribe((data: Result[]) => {
    this.apiService.getPersonajes().subscribe((data: any) => {
      this.personajeList = data.results;
    })
  }

  navigate(id: number) {
    this.router.navigate(['/personajes', id]);
  }
}
