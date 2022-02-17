export const lineupValid = (lineupName, lineup) => {
    const lineupNameIsValid = (lineupName !== null || lineupName !== '')
    if (!lineupNameIsValid || !lineup) {
        return false
    }

    return Object.keys(lineup).reduce((acc, playerRowIndex) => {
        const players = lineup[playerRowIndex]
        const playerRowIsValid = Object.keys(players).reduce((acc, playerIndex) => {
            const name = players[playerIndex].name
            const number = players[playerIndex].number
            return acc && (name !== "" && name !== null) && (number > 0 && number < 100)
        }, true)
        return acc && playerRowIsValid
    }, true)
}