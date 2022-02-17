export const lineupStyleOptions = [
    { value: "11-a-side", label: "11-a-side"},
    { value: "7-a-side", label: "7-a-side"},
    { value: "5-a-side", label: "5-a-side"},
]

export const formations11 = [
        '4 3 3',
        '4 2 3 1', 
        '4 4 2',  
        '4 1 4 1', 
        '4 1 2 1 2',
        '4 1 3 2',
        '4 2 2 2',
        '4 2 4',
        '4 3 1 2',
        '4 3 2 1',
        '4 4 1 1',
        '4 5 1',

        '3 1 4 2',
        '3 4 1 2',
        '3 4 2 1',
        '3 4 3',
        '3 5 1 1',
        '3 5 2',

        '5 2 1 2',
        '5 2 2 1',
        '5 2 3',
        '5 3 2',
        '5 4 1',
]

export const formations7 = [
    '2 2 2',
    '2 3 1',
    '2 1 3',
    '2 1 2 1',
    '3 2 1',
    '3 1 2',
    '4 1 1',
]

export const formations5 = [
    '1 3',
    '1 2 1',
    '1 1 2',
    '2 2',
    '2 1 1',
    '3 1',
]

export const getFormationOptions = (lineupStyleOption) => {
    const formations = getFormationFromLineupStyle(lineupStyleOption)
    const formationOptions = []
    formations.map((formation) => {
        formationOptions.push({
            value: formation,
            label: formation,
        })
    })
    return formationOptions
}

const getFormationFromLineupStyle = (lineupStyleOption) => {
    switch (lineupStyleOption) {
        case '11-a-side':
            return formations11
        case '7-a-side':
            return formations7
        case '5-a-side':
            return formations5
        default:
            return null
    }
}

export const shirtOptions = [
    { value: "Plain", label: "Plain"},
    { value: "Stripes", label: "Stripes"},
    { value: "Hoops", label: "Hoops"},
]