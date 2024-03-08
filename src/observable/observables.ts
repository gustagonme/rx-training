import { Observable, Observer, Subscriber } from 'rxjs';


/**
 * next
 * error
 * complete => ()
 */

const observer: Observer<number> = {
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log("Completado")
}

const names$ = new Observable((subscriber:Subscriber<string>) =>{
    subscriber.next("Cristian");
    subscriber.next("David")
    subscriber.next("Brayam")

    subscriber.complete()
});

// names$.subscribe(console.log)

// names$.subscribe((name)=>{
//     console.log(name);
    
// })
// names$.subscribe(observer);
// names$.subscribe(
//     next => console.log("next", next),
//     error => console.log("Error", error),
//     () => console.log("complete")
// )


const numbers$ = new Observable((subscriber:Subscriber<number>)=>{

    let numberSelected:number = 0

    const interval = setInterval(()=>{
        numberSelected++;
        subscriber.next(numberSelected)
    },1000)

    subscriber.complete();
    
    return () => {
        clearInterval(interval)
    }
    
});

const result = numbers$.subscribe(observer);
result.unsubscribe();
