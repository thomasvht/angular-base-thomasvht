import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from 'q';

@Injectable()
export class TodosService {
    todos$: Observable<Array<string>>;
    index: number;

    constructor() {
        this.todos$ = of([]);
    }

    add(title: string) {
        this.todos$.pipe(
            map(todos => todos.push(title))
        )
        .subscribe();
    }

    remove(title: string) {
        console.log('title', title);
        this.todos$.pipe(
            map(todos => todos.findIndex(todo => todo === title))
        )
        .subscribe(result => this.index = result);
        console.log('index', this.index);

        this.todos$.pipe(
            map(todos => todos.splice(this.index, 1))
        );
    }
}