const samples = [
    'AHKHQHJHTH',
    '9SKSQSJSTS',
    '2H7D2S2D2C',
    '8H6S6D6H8D',
    '4H8H2H5H9H',
    '6H7D8S9CTH',
    'QCQSKCQH4S',
    '7D7S5D5SAC',
    '5C5D6DAC9C',
    '7C5H8DTDKS',
    '7C5H8DTDKS',
    '5C5D6DAC9C',
    '7D7S5D5SAC',
    '8C8SKC8H4S',
    '6H7D8S9CTH',
    '4H8H2H5H9H',
    '8H6S6D6H8D',
    '2H7D2S2D2C',
    '9SKSQSJSTS',
    'AHKHQHJHTH'
]

exports.assignHandValue = function(hand) {
    if (isForRoyalFlush(hand)) {
        return { 'value': 100000000000, 'name': 'royal flush' }
    }

    if (isStraightFlush(hand)) {
        return findHighCard(hand, 90000000000, "straight flush");
    }

    if (isFourOfAKind(hand)) {
        let value = 80000000000;
        let pairValue = assignPairValue(hand, 4, 100) + value;
        return findHighCard(hand, pairValue, "four of a kind");
    }

    if (isFullHouse(hand)) {
        let value = 70000000000;
        let threePairValue = assignPairValue(hand, 3, 10000) + value;
        let pairValue = assignPairValue(hand, 2, 100) + threePairValue;
        return findHighCard(hand, pairValue, "full house");
    }

    if (isAFlush(hand)) {
        let value = 60000000000;
        //find five highest cards
        return findHighCard(hand, value, "flush");
    }

    if (isAStaight(hand)) {
        return findHighCard(hand, 50000000000, "straight");
    }

    if (isThreeOfAKind(hand)) {
        let value = 40000000000;
        //find card value of pair
        return findHighCard(hand, value, "three of a kind");
    }

    if (isTwoPair(hand)) {
        let value = 30000000000;
        //find card value of pair and second pair
        return findHighCard(hand, value, "two pair");
    }

    if (isOnePair(hand)) {
        let value = 20000000000;
        //find card value of pair
        return findHighCard(hand, value, "pair");
    }
    let value = 10000000000;
    //find five highest cards
    return findHighCard(hand, value, "high card");
}

const isForRoyalFlush = function(hand) {
    if (
        hand.indexOf('AC') > -1 &&
        hand.indexOf('KC') > -1 &&
        hand.indexOf('QC') > -1 &&
        hand.indexOf('JC') > -1 &&
        hand.indexOf('TC') > -1
    ) {return true;}

    if (
        hand.indexOf('AS') > -1 &&
        hand.indexOf('KS') > -1 &&
        hand.indexOf('QS') > -1 &&
        hand.indexOf('JS') > -1 &&
        hand.indexOf('TS') > -1
    ) {return true;}

    if (
        hand.indexOf('AD') > -1 &&
        hand.indexOf('KD') > -1 &&
        hand.indexOf('QD') > -1 &&
        hand.indexOf('JD') > -1 &&
        hand.indexOf('TD') > -1
    ) {return true;}

    if (
        hand.indexOf('AH') > -1 &&
        hand.indexOf('KH') > -1 &&
        hand.indexOf('QH') > -1 &&
        hand.indexOf('JH') > -1 &&
        hand.indexOf('TH') > -1
    ) {return true;}

    return false;
}

const isStraightFlush = function(hand) {
    if (!isAFlush(hand)) {
        return false;
    }

    if (!isAStaight(hand)) {
        return false;
    }
    
    return true;
}

const isFourOfAKind = function(hand) {
    return checkForPair(hand, 4);
}

const isFullHouse = function(hand) {
    return checkForMultiplePairs(hand, 3);
}

const isAFlush = function(hand) {
    let handArr = hand.split('');
    let cardSuit = handArr[1];

    if (
        handArr[3] === cardSuit &&
        handArr[5] === cardSuit &&
        handArr[7] === cardSuit &&
        handArr[9] === cardSuit
    ) {return true;}

    return false;
}

const isAStaight = function(hand) {
    let handArr = hand.split('');
    let cardOneVal = cardValues(handArr[0]);
    let cardTwoVal = cardValues(handArr[2]);
    let cardThreeVal = cardValues(handArr[4]);
    let cardFourVal = cardValues(handArr[6]);
    let cardFiveVal = cardValues(handArr[8]);

    function sortNumber(a, b) {
        return a - b;
    }

    let orderedHandArr = [cardOneVal, cardTwoVal, cardThreeVal, cardFourVal, cardFiveVal].sort(sortNumber);

    for (let i = 0; i < orderedHandArr.length; i++) {
        let thisVal = orderedHandArr[i];
        let nextVal = orderedHandArr[i+1]

        if (thisVal !== (nextVal -1)) {
            return false;
        }

        if (i === 3) {
            return true;
        }
    }
}

const isThreeOfAKind = function(hand) {
    return checkForPair(hand, 3);
}

const isTwoPair = function(hand) {
    return checkForMultiplePairs(hand, 2)
}

const isOnePair = function(hand) {
    return checkForPair(hand, 2);
}

const findHighCard = function(hand, exsistingValue, handName) {
    let handArr = hand.split('');
    let highCard = 0;

    for (let i = 0; i < handArr.length; i++) {
        if (
            i !== 0 &&
            i !== 2 &&
            i !== 4 &&
            i !== 6 &&
            i !== 6 
            ) {continue;}

            let cardValue = cardValues(handArr[i]);

            if (cardValue > highCard) {
                highCard = cardValue;
            }
    }

    highCard += exsistingValue
    return { 'value': highCard, 'name': handName } ;
}

const checkForPair = function(hand, numberOfMatches) {
    let handArr = hand.split('');

    for (let i = 0; i < handArr.length; i++) {
        if (
            i !== 0 &&
            i !== 2 &&
            i !== 4 &&
            i !== 6 &&
            i !== 6 
        ){} else {
            let card = handArr[i];
            let regExCard = new RegExp(card,"g");

            if(hand.match(regExCard).length === numberOfMatches) {
                return true;
            }
        }
    }

    return false;
}

const checkForMultiplePairs = function(hand, twoOrFullHouse) {
    let handArr = hand.split('');

    for (let i = 0; i < handArr.length; i++) {
        if (
            i !== 0 &&
            i !== 2 &&
            i !== 4 &&
            i !== 6 &&
            i !== 6 
            ){} else {
                let card = handArr[i];
                let regExCard = new RegExp(card,"g");

                if(hand.match(regExCard).length === twoOrFullHouse) {
                    for (let i = 0; i < handArr.length; i++) {
                        let secondCard = handArr[i];
                        if (
                            i !== 0 &&
                            i !== 2 &&
                            i !== 4 &&
                            i !== 6 &&
                            i !== 6 
                            ){} else if (secondCard === card) {

                        } else {
                            let secondRegExCard = new RegExp(secondCard,"g");

                            if(hand.match(secondRegExCard).length === 2) {
                                return true;
                            }
                        }
                    }
                }
            }
    }

    return false;
}

const assignPairValue = function(hand, numberOfMatches, multiplier) {
    let handArr = hand.split('');

    for (let i = 0; i < handArr.length; i++) {
        if (
            i !== 0 &&
            i !== 2 &&
            i !== 4 &&
            i !== 6 &&
            i !== 6 
        ){} else {
            let card = handArr[i];
            let regExCard = new RegExp(card,"g");

            if(hand.match(regExCard).length === numberOfMatches) {
                let pairValue = hand.match(regExCard)[0];
                return cardValues(pairValue) * multiplier;
            }
        }
    }
}

const cardValues = function(card) {
    if (card === 'A') {
        return 13;
    }
    if (card === 'K') {
        return 12;
    }
    if (card === 'Q') {
        return 11;
    }
    if (card === 'J') {
        return 10;
    }
    if (card === 'T') {
        return 9;
    }
    if (card === '9') {
        return 8;
    }
    if (card === '8') {
        return 7;
    }
    if (card === '7') {
        return 6;
    }
    if (card === '6') {
        return 5;
    }
    if (card === '5') {
        return 4;
    }
    if (card === '4') {
        return 3;
    }
    if (card === '3') {
        return 2;
    }
    if (card === '2') {
        return 1;
    }
}

for (let i = 0; i < samples.length; i++) {
    console.log(this.assignHandValue(samples[i]));
}