/** Controls the players movements through the world map.
 * @param  {array} map
 * 
 */
export const playerNavigation = (map) => {
    // default is 4 * 4 map grid 
    let playerIndex = 0;
    let east = 1;
    let west = 1;
    let south = 4;
    let north = 4;
    let eastBounds = 3;
    let westBounds = 0;
    let northBound = 0;
    let southBound = 15;

    // 16 * 16 map grid
    if (map.length === 256) {
        south = 16;
        north = 16;
        southBound = 255;
        eastBounds = 15;
    }
    /** Methods to move the player or get there current location. */
    return {
        /** return the players location on the map */
        getLocation: () => {
            return map[playerIndex];
        },
        /** Move the player in a direction : North | East | South | West */
        move: (direction) => {
            if (direction === 'east' && eastBounds > 0) {
                playerIndex += east;
                if (map[playerIndex] === "###") {
                    playerIndex -= west;
                    console.log('You can\'t go that way!');
                    return;
                }
                eastBounds--;
                westBounds++;
                console.log(map[playerIndex]);
                return map[playerIndex];
            }

            if (direction === 'west' && westBounds > 0) {
                playerIndex -= west;
                if (map[playerIndex] === "###") {
                    playerIndex += east;
                    console.log('You can\'t go that way!');
                    return;
                }
                eastBounds++;
                westBounds--;
                console.log(map[playerIndex]);
                return map[playerIndex];

            }
            if (direction === 'south' && southBound > 0) {
                playerIndex += south;
                if (map[playerIndex] === "###") {
                    playerIndex -= north;
                    console.log('You can\'t go that way!');
                    return;
                }
                southBound -= south;
                northBound += north;
                console.log(map[playerIndex]);
                return map[playerIndex];

            }
            if (direction === 'north' && northBound > 0) {
                playerIndex -= north;
                if (map[playerIndex] === "###") {
                    playerIndex += south;
                    console.log('You can\'t go that way!');
                    return;
                }
                southBound += south;
                northBound -= north;
                console.log(map[playerIndex]);
                return map[playerIndex];
            }
        }
    }
}