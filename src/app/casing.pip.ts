import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'casing'
})
export class CasingPipe implements PipeTransform {
    preposition = ['of', 'a', 'in', 'on', 'at', 'inside', 'into', 'the'];

    transform(value: string, ...args: any[]) {
        if (!value) {
            return;
        }
        const words = this.convertToWords(value.trim());
        let sentence = this.capitalize(words[0]);
        if (words.length === 1) {
            return sentence;
        }

        for (let i=1; i< words.length; i++) {
            sentence += ' ';
            const word = words[i];
            if (this.isPreposition(word)) {
                sentence += word;
            } else {
                sentence += this.capitalize(word);
            }
        }

        return sentence.trim();
    }

    private isPreposition(word: string) {
        return this.preposition.includes(word);
    }

    private convertToWords(sentence: string) {
        return sentence.split(' ');
    }

    private capitalize(word: string) {
        let firstChar = word.charAt(0);
        let otherChar: string;
        if (word.length > 0) {
            otherChar = word.slice(1);
        }
        return firstChar.toUpperCase() + otherChar.toLowerCase();
    }

}