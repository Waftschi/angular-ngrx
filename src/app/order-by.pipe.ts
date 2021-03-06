import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: true,
})
export class OrderByPipe {

    static orderByComparator(a: any, b: any): number {

        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            // Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
        }
        else {
            // Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b)) return -1;
            if (parseFloat(a) > parseFloat(b)) return 1;
        }

        return 0; // equal each other
    }

    /**
     *
     * @param array
     * @param orderBy
     * @param {boolean} asc
     * @returns {any}
     */
    transform(array, orderBy, asc = true) {
        // console.dir(array)
        if (!orderBy || orderBy.trim() === '') {
            return array;
        }

        // ascending
        if (asc) {
            return Array.from(array).sort((item1: any, item2: any) => {
                return OrderByPipe.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            // not asc
            return Array.from(array).sort((item1: any, item2: any) => {
                return OrderByPipe.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }

    }


}