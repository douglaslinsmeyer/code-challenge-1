const samples = [
    'AHKHQHJHTH','9SKSQSJSTS',
    '2H7D2S2D2C','8H6S6D6H8D',
    '4H8H2H5H9H','6HTD6DKS6C',
    '8CTSKC9H4S','7D2S5D3SAC',
    '5CAD5DAC9C','7C5H8DTDKS',
    '3H7H6SKCJS','QHTDJC2D8S',
    'TH8H5CQSTC','9H4DJCKSJS',
    '7C5HKCQHJD','ASKH4CAD4S',
    '5HKS9C7D9H','8D3S5D5CAH',
    '6H4H5C3H2H','3SQH5S6SAS',
    'TD8C4H7CTC','KC4C3H7SKS',
    '7C9C6DKD3H','4CQSQCACKH',
    'JC6S5H2H2D','KD9D7CASJS',
    'ADQHTH9D8H','TS6D3SASAC',
    '2H4S5C5STC','KCJD6CTS3C',
    'QDAS6HJS2C','3D9HKC4H8S',
    'KD8S9S7C2S','3S6D6S4HKC',
    '3C8C2D7D4D','9S4SQH4HJD',
    '8CKC7STC2D','TS8HQDAC5C',
    '3DKHQD6C6S','ADAS8H2HQS',
    '6S8D4C8S6C','QHTC6D7D9D',
    '2S8D8C4CTS','9S9D9CAC3D',
    '3CQS2S4HJH','3D2DTD8S9H',
    '5HQS8S6D3C','8CJDAS7H7D',
    '6HTD9DASJH','6CQC9SKDJC',
    'AH8SQS4DTH','ACTS3C3D5C',
    '5S4DJS3D8H','6CTS3SAD8C',
    '6D7C5D5H3S','5CJC2H5S3D'
]

exports.assignHandValue = function(hand) {
    if (isForRoyalFlush(hand)) {
        return findHighCard(hand, 649740, "royal flush");
    }

    if (isStraightFlush(hand)) {
        return findHighCard(hand, 72192, "straight flush");
    }

    if (isFourOfAKind(hand)) {
        return findHighCard(hand, 4165, "four of a kind");
    }

    if (isFullHouse(hand)) {
        return findHighCard(hand, 693, "full house");
    }

    if (isAFlush(hand)) {
        return findHighCard(hand, 508, "flush");
    }

    if (isAStaight(hand)) {
        return findHighCard(hand, 254, "straight");
    }

    if (isThreeOfAKind(hand)) {
        return findHighCard(hand, 136, "three of a kind");
    }

    if (isTwoPair(hand)) {
        return findHighCard(hand, 52, "two pair");
    }

    if (isOnePair(hand)) {
        return findHighCard(hand, 20, "pair");
    }

    return findHighCard(hand, 0, "high card");

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
            ){} else {
                let cardValue = cardValues(handArr[i]);

                if (cardValue > highCard) {
                    highCard = cardValue;
                }
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

const cardValues = function(card) {
    if (card === 'A') {
        return 14;
    }
    if (card === 'K') {
        return 13;
    }
    if (card === 'Q') {
        return 12;
    }
    if (card === 'J') {
        return 11;
    }
    if (card === 'T') {
        return 10;
    }
    if (card === '9') {
        return 9;
    }
    if (card === '8') {
        return 8;
    }
    if (card === '7') {
        return 7;
    }
    if (card === '6') {
        return 6;
    }
    if (card === '5') {
        return 5;
    }
    if (card === '4') {
        return 4;
    }
    if (card === '3') {
        return 3;
    }
    if (card === '2') {
        return 2;
    }

    return 0;
}
