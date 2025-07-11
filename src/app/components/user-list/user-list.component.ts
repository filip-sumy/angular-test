import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UserService } from '../../services/user.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-user-list',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(
    private userService: UserService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      const results = data.results;

      results.forEach((user: any) => {
        const { latitude, longitude } = user.location.coordinates;

        this.weatherService.getWeather(+latitude, +longitude).subscribe((weather) => {
          user.weather = weather.current_weather;
        });

        this.users.push(user);
      });
    });
  }
}
