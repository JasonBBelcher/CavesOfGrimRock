import * as maps from "../Maps/maps";
import * as locations from "../Locations/locations";
import { Factory } from "../Registry/Factory";
const locationList = locations.default;
const mapDict = maps.default;

/**
 * Singleton Factory that is responsible for creating a Map of Location objects for 
 * each room on the grid.
 */
export const LocationFactory = {
    /**
     * @param  {config object} registry
     * @param  {string} type
     * @param  {string} id
     */
    construct(registry, type) {
        switch (type) {
            case 'map1':
                let populatedMap = mapDict[type].map((rm) => {
                    if (rm === 'st1') {
                        return new registry['Location'](

                            locationList[0].id,
                            locationList[0].name,
                            locationList[0].description,
                            locationList[0].itemRequiredToEnter,
                            locationList[0].hasAMonster,
                            locationList[0].monstersAtLocation,
                            locationList[0].playerVisited
                        )
                    }
                    if (rm !== '###') {
                        let randomLocation = locationList[randomNumber(1, 22)]
                        let monsters = [];
                        if (randomLocation.monstersAtLocation.length) {
                            randomLocation.hasAMonster = true;
                            while (randomLocation.monstersAtLocation.length) {
                                monsters.push(Factory.construct(registry, 'Monster', randomLocation.monstersAtLocation.pop()))
                            }
                        }
                        return new registry['Location'](
                            randomLocation.id,
                            randomLocation.name,
                            randomLocation.description,
                            randomLocation.itemRequiredToEnter,
                            randomLocation.hasAMonster,
                            monsters,
                            randomLocation.playerVisited
                        );
                    } else {
                        return "###";
                    }
                });

                return populatedMap;
            case 'map2':
                populatedMap = mapDict[type].map((rm) => {
                    if (rm === 'st1') {
                        return new registry['Location'](

                            locationList[0].id,
                            locationList[0].name,
                            locationList[0].description,
                            locationList[0].itemRequiredToEnter,
                            locationList[0].hasAMonster,
                            locationList[0].monstersAtLocation,
                            locationList[0].playerVisited
                        )
                    }
                    if (rm !== '###') {
                        let randomLocation = locationList[randomNumber(1, 22)]
                        let monsters = [];
                        if (randomLocation.monstersAtLocation.length) {
                            randomLocation.hasAMonster = true;
                            while (randomLocation.monstersAtLocation.length) {
                                monsters.push(Factory.construct(registry, 'Monster', randomLocation.monstersAtLocation.pop()))
                            }
                        }
                        return new registry['Location'](randomLocation.id,
                            randomLocation.name,
                            randomLocation.description,
                            randomLocation.itemRequiredToEnter,
                            randomLocation.hasAMonster,
                            randomLocation.monstersAtLocation,
                            randomLocation.playerVisited
                        );
                    } else {
                        return "###";
                    }
                });

                return populatedMap;
            case 'map3':
                populatedMap = mapDict[type].map((rm) => {
                    if (rm === 'st1') {
                        return new registry['Location'](

                            locationList[0].id,
                            locationList[0].name,
                            locationList[0].description,
                            locationList[0].itemRequiredToEnter,
                            locationList[0].hasAMonster,
                            locationList[0].monstersAtLocation,
                            locationList[0].playerVisited
                        )
                    }
                    if (rm !== '###') {
                        let randomLocation = locationList[randomNumber(1, 22)]
                        let monsters = [];
                        if (randomLocation.monstersAtLocation.length) {
                            randomLocation.hasAMonster = true;
                            while (randomLocation.monstersAtLocation.length) {
                                monsters.push(Factory.construct(registry, 'Monster', randomLocation.monstersAtLocation.pop()))
                            }
                        }
                        return new registry['Location'](randomLocation.id,
                            randomLocation.name,
                            randomLocation.description,
                            randomLocation.itemRequiredToEnter,
                            randomLocation.hasAMonster,
                            randomLocation.monstersAtLocation,
                            randomLocation.playerVisited
                        );
                    } else {
                        return "###";
                    }
                });

                return populatedMap;
            case 'map4':
                populatedMap = mapDict[type].map((rm) => {
                    if (rm === 'st1') {
                        return new registry['Location'](

                            locationList[0].id,
                            locationList[0].name,
                            locationList[0].description,
                            locationList[0].itemRequiredToEnter,
                            locationList[0].hasAMonster,
                            locationList[0].monstersAtLocation,
                            locationList[0].playerVisited
                        )
                    }
                    if (rm !== '###') {
                        let randomLocation = locationList[randomNumber(1, 22)]
                        let monsters = [];
                        if (randomLocation.monstersAtLocation.length) {
                            randomLocation.hasAMonster = true;
                            while (randomLocation.monstersAtLocation.length) {
                                monsters.push(Factory.construct(registry, 'Monster', randomLocation.monstersAtLocation.pop()))
                            }
                        }
                        return new registry['Location'](randomLocation.id,
                            randomLocation.name,
                            randomLocation.description,
                            randomLocation.itemRequiredToEnter,
                            randomLocation.hasAMonster,
                            randomLocation.monstersAtLocation,
                            randomLocation.playerVisited
                        );
                    } else {
                        return "###";
                    }
                });

                return populatedMap;
        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}