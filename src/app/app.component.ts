import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
} from 'firebase/firestore';
import { environment } from './environments/environment';

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
interface Contact {
  id: string;
  name: string;
  email: string;
  phone: number;
}
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'firebase-crud-firestore';
  contactData: any[] = [];
  @ViewChild('contactForm') form!: NgForm;
  updateMode = false;
  activeContactId!: string;

  ngOnInit() {
    this.getContacts();
  }
  async saveContactForm(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.updateMode) {
      try {
        await updateDoc(doc(db, 'contacts', this.activeContactId), {
          name: form.value.name,
          phone: form.value.phone,
          email: form.value.email,
        });
        this.updateMode = false;
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await addDoc(collection(db, 'contacts'), form.value);
      } catch (error) {
        console.error(error);
      }
    }
    form.resetForm();
    this.getContacts();
  }

  async getContacts() {
    try {
      this.contactData = [];
      const q = query(collection(db, 'contacts'));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.contactData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async editContact(contact: Contact) {
    this.updateMode = true;
    this.activeContactId = contact.id;
    this.form.setValue({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

  async deleteContact(id: string) {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      this.getContacts();
    } catch (error) {
      console.error(error);
    }
  }
}
