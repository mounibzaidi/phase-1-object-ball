function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const gameData = gameObject();

    if (gameData.home.players[playerName]) {
        return gameData.home.players[playerName].points;
    } else if (gameData.away.players[playerName]) {
        return gameData.away.players[playerName].points;
    } else {
        return "Player not found.";
    }
}

console.log(numPointsScored("Brendan Haywood"));

function shoSize(playerName) {
    const gameData = gameObject();
    if (gameData.home.players[playerName]) {
        return gameData.home.players[playerName].shoe;
    }
    else if (gameData.away.players[playerName]) {
        return gameData.away.players[playerName].shoe;
    }
}
console.log(shoSize("Brendan Haywood"));

function teamColors(teamName) {
    const gameData = gameObject();

    if (gameData.home.teamName === teamName) {
        return gameData.home.colors;
    } else if (gameData.away.teamName === teamName) {
        return gameData.away.colors;
    } else {
        return "Team not found.";
    }
}

console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    const gameData = gameObject();
    return [gameData.home.teamName, gameData.away.teamName];
}
const names = teamNames();
console.log(names);

function playerNumbers(teamName) {
    const gameData = gameObject();
    const homePlayers = gameData.home.players;
    const awayPlayers = gameData.away.players;

    const playerTeams = {};

    for (const playerName in homePlayers) {
        playerTeams[playerName] = gameData.home.teamName;
    }

    for (const playerName in awayPlayers) {
        playerTeams[playerName] = gameData.away.teamName;
    }

    const teamPlayerNumbers = [];

    for (const playerName in playerTeams) {
        if (playerTeams[playerName] === teamName) {
            if (homePlayers[playerName]) {
                teamPlayerNumbers.push(homePlayers[playerName].number);
            } else if (awayPlayers[playerName]) {
                teamPlayerNumbers.push(awayPlayers[playerName].number);
            }
        }
    }

    return teamPlayerNumbers;
}

console.log(playerNumbers("Charlotte Hornets"));
function playerStats(playerName) {
    const gameData = gameObject();

    if (gameData.home.players[playerName]) {
        return gameData.home.players[playerName];
    } else if (gameData.away.players[playerName]) {
        return gameData.away.players[playerName];
    } else {
        return "Player not found.";
    }
}

const stats = playerStats("Alan Anderson");
console.log(stats);

function bigShoeRebounds() {
    const gameData = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe;

    for (const playerName in gameData.home.players) {
        const player = gameData.home.players[playerName];
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = player;
        }
    }

    for (const playerName in gameData.away.players) {
        const player = gameData.away.players[playerName];
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = player;
        }
    }

    if (playerWithLargestShoe) {
        return playerWithLargestShoe.rebounds;
    } else {
        return "Player not found.";
    }
}

const rebounds = bigShoeRebounds();
console.log(rebounds);




