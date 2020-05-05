import { Location } from "../../Entities/Location";



export const randomMapNodeGenerator = {
    createNodes(first, direction) {

        return function recurse(len) {
            /**
         * Select the first map nodes direction so node paths can be connected later
         */

            if (len == 0) {
                return;
            }

            if (first === 'North') {
                first = null;
                return new Location(len, `test_${len}`, 'test description', null, null, null, recurse(len - 1));
            }
            if (first === 'East') {
                first = null;
                return new Location(len, `test_${len}`, 'test description', null, null, null, null, recurse(len - 1));
            }
            if (first === 'South') {
                first = null;
                return new Location(len, `test_${len}`, 'test description', null, null, null, null, null, recurse(len - 1));
            }
            if (first === 'West') {
                first = null;
                return new Location(len, `test_${len}`, 'test description', null, null, null, null, null, null, recurse(len - 1));
            }

            let roll = Math.floor(calculateRandomNumber(1, 20));


            /** 
             * Random generate nodes.
             */

            if (direction === 'Northeast') {


                /** North */
                if (roll <= 20 && roll >= 10) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, recurse(len - 1));
                }
                /** East */
                if (roll <= 9) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, null, recurse(len - 1));
                }

            }

            if (direction === 'Northwest') {
                /** North */
                if (roll <= 20 && roll >= 10) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, recurse(len - 1));
                }
                /** West */
                if (roll <= 9) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, null, null, null, recurse(len - 1));
                }

            }
            if (direction === 'Southwest') {
                /** South */
                if (roll <= 20 && roll >= 10) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, null, null, recurse(len - 1));
                }
                /** West */
                if (roll <= 9) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, null, null, null, recurse(len - 1));
                }

            }

            if (direction === 'Southeast') {
                /** East */
                if (roll <= 20 && roll >= 10) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, null, recurse(len - 1));
                }
                /** South */
                if (roll <= 9) {
                    return new Location(len, `test_${len}`, 'test description', null, null, null, null, null, recurse(len - 1));
                }

            }
        }
    },

    locationNodes: [],

    getAllLocations() {
        let direction = "LocationToNorth";
        let directions = ["LocationToNorth", "LocationToEast", "LocationToSouth", "LocationToWest"];
        let firstNode = false;
        let recurse;
        return recurse = (mapPath) => {
            if (!firstNode) {
                firstNode = true;
                this.locationNodes.push(mapPath);
            }
            if (!mapPath[direction]) {
                direction = directions[0];
            }
            if (!mapPath[direction]) {
                direction = directions[1];
            }
            if (!mapPath[direction]) {
                direction = directions[2];
            }
            if (!mapPath[direction]) {
                direction = directions[3];
            }
            if (!mapPath[direction]) {
                direction = direction[0]
            }
            if (!mapPath[direction]) {
                direction = directions[1];
            }
            if (!mapPath[direction]) {
                direction = directions[2];
            }
            if (!mapPath[direction]) {
                direction = direction[3]
            }
            if (!mapPath[direction]) {
                direction = direction[3]
            }
            if (!mapPath[direction]) {
                return;
            }

            this.locationNodes.push(mapPath[direction]);
            return recurse(mapPath[direction]);

        }
    }

}


function calculateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



