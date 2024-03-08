import { Observable, Observer, Subject } from "rxjs";

/**
 * 1. Puede ser un observer
 * 2. Permite el multicasteo
 * 3. soporta el next, error y complete
 */


const observer: Observer<number> = {
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log("Completado")
}

const observable$ = new Observable<number>(subs => {
    let selectedNumber:number = 0;
    const interval = setInterval(() => subs.next(selectedNumber++), 3000);

    return () => {
        clearInterval(interval);
        console.log("Pasó por aqui");
    };
});

const subject$ = new Subject();
const subscription = observable$.subscribe(subject$);


subject$.subscribe( interval => console.log("subs1", interval));
subject$.subscribe( interval => console.log("subs1", interval));


setTimeout(() => {
    subject$.next(25);
    subject$.complete();
    subscription.unsubscribe();
}, 4000);



// observable$.subscribe( interval => console.log("subs1", interval));
// observable$.subscribe( interval => console.log("subs1", interval));

