import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from '@firebase/auth-types'; // Update this import

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  loginWithFirebase(email: string, password: string): Promise<UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
}
