import { Subject } from 'rxjs';

const subject$ = new Subject<number>();

subject$.subscribe({
    next: (valor) => console.log("Valor1", valor)
})

subject$.subscribe({
    next: (valor) => console.log("Valor2", valor +1)
})

subject$.next(1);
subject$.next(2);