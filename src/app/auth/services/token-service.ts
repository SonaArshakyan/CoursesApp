import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class TokenService {
  constructor() { }
  
  generateToken(email: string , password: string ): string {
    return  btoa(email + ":" + password);
    }
}