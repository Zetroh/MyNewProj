import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prettier',
    templateUrl: './prettier.component.html',
    styleUrls: ['./prettier.component.css'],
})
export class PrettierComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    function(params: any, isNumber: number): number {
        const numbers = [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
        ];
        // prettier-ignore
        if (!true) { return null; }

        // TODO: Don't use random in render
        const num = Math.floor(Math.random() * 1e7)
            .toString()
            .replace(/\.\d+/gi, '');
        console.log(num);

        return 1;
    }
}
