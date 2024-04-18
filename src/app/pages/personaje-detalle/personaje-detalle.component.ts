import { Component, OnInit, inject } from '@angular/core';
import { Result } from '../../models/personaje.model';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-personaje-detalle',
  standalone: true,
  imports: [],
  templateUrl: './personaje-detalle.component.html',
  styleUrl: './personaje-detalle.component.css'
})
export class PersonajeDetalleComponent implements OnInit {

  loading: boolean = true;
  public personaje?: Result;
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiServiceService);

  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.apiService.getPersonajeById(params['id']).subscribe((data: Result) => {
        this.personaje = data;
        this.loading = false;
      })
    })
  }
}
