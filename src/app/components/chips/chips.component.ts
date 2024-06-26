import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {Highlight, HighlightAuto } from 'ngx-highlightjs';
import {HighlightLineNumbers  } from 'ngx-highlightjs/line-numbers';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule, CommonModule ,MatButtonModule,],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})


export class ChipsComponent {
  @Input() type: string = "";
  @Input() text: string = "";
  @Input('bg-color') bgColor: string = "#eba146";
  
  @ViewChild('chip') chipRef: ElementRef|undefined;
  @ViewChild('chip4') chipRef4: ElementRef | undefined;
  @ViewChild('chipBlue') chipRefBlue: ElementRef | undefined;
  @ViewChild('chipPurple') chipRefPurple: ElementRef | undefined;

  @ViewChild('chip7') chip7Ref: ElementRef | undefined;
  chipList: { id: number, name: string }[] = [{ id: 1, name: 'Digite' }];


  handleClick() {
    const newName = prompt('Digite um novo nome para o chip:');
    if (newName !== null && newName.trim() !== '') {
      const limiteCaracteres = 12;

      if(newName.trim().length > limiteCaracteres){
        alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
        return; // Saia da função sem fazer nada
      }
      
      if (newName.trim() !== '') {
        console.log(this.chipRef?.nativeElement);
        if (this.chipRef) {
          this.chipRef.nativeElement.innerHTML = newName;
        }
        
      }
      }
      console.log(this.chipRef!.nativeElement); 
      this.chipRef!.nativeElement.innerHTML = newName;
    }



    handleClick4() {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
  
        if (newName.trim().length > limiteCaracteres) {
          alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
          return; // Saia da função sem fazer nada
        }
  
        if (newName.trim() !== '') {
          console.log(this.chipRef4?.nativeElement);
          if (this.chipRef4) {
            this.chipRef4.nativeElement.innerHTML = newName;
          }
        }
      }
      console.log(this.chipRef4!.nativeElement);
      this.chipRef4!.nativeElement.innerHTML = newName;
    }
  
    handleClose4(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }





    handleClickBlue() {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
  
        if (newName.trim().length > limiteCaracteres) {
          alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
          return; // Saia da função sem fazer nada
        }
  
        if (newName.trim() !== '') {
          console.log(this.chipRefBlue?.nativeElement);
          if (this.chipRefBlue) {
            this.chipRefBlue.nativeElement.innerHTML = newName;
          }
        }
      }
      console.log(this.chipRefBlue!.nativeElement);
      this.chipRefBlue!.nativeElement.innerHTML = newName;
    }
  
    handleClickPurple() {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
  
        if (newName.trim().length > limiteCaracteres) {
          alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
          return; // Saia da função sem fazer nada
        }
  
        if (newName.trim() !== '') {
          console.log(this.chipRefPurple?.nativeElement);
          if (this.chipRefPurple) {
            this.chipRefPurple.nativeElement.innerHTML = newName;
          }
        }
      }
      console.log(this.chipRefPurple!.nativeElement);
      this.chipRefPurple!.nativeElement.innerHTML = newName;
    }
  
    handleCloseChip4(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }
  
    handleCloseChipBlue(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }
  
    handleCloseChipPurple(event: Event) {
      event.stopPropagation(); // Impede que o clique no botão feche dispare o handleClick
      const chipElement = (event.target as HTMLElement).parentElement;
      if (chipElement) {
        chipElement.style.display = 'none';
      }
    }


    handleClickChip7(chip: { id: number, name: string }) {
      const newName = prompt('Digite um novo nome para o chip:');
      if (newName !== null && newName.trim() !== '') {
        const limiteCaracteres = 12;
        if (newName.trim().length > limiteCaracteres) {
          alert(`Por favor, digite no máximo ${limiteCaracteres} caracteres.`);
          return;
        }
        chip.name = newName.trim();
      }
    }
  
    handleCloseChip7(event: Event, chip: { id: number, name: string }) {
      event.stopPropagation();
      this.chipList = this.chipList.filter(c => c.id !== chip.id);
    }
  
    addChip(event: Event) {
      event.stopPropagation();
      if (this.chipList.length < 5) {
        const newId = this.chipList.length ? Math.max(...this.chipList.map(c => c.id)) + 1 : 1;
        this.chipList.push({ id: newId, name: 'Digite' });
      }
    }

  }





    




