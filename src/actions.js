export const FLIP_CARD = 'FLIP_CARD';
export const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
export const UNMATCHED_PAIR = 'UNMATCHED_PAIR';
export const MATCHED_PAIR = 'MATCHED_PAIR';
export const MARK_PAIR = 'MARK_PAIR';
export const FLIP_DOWN_PAIR = 'FLIP_DOWN_PAIR';
export const INIT_GAME = 'INIT_GAME';
export const GENERATE_PAIRS = 'GENERATE_PAIRS';
export const SHOW_NUM_QUANTITY = 'SHOW_NUM_QUANTITY';


export function flipUpCard(id) {
    return { type: FLIP_CARD, id };
}

export function shuffleCards() {
    return { type: SHUFFLE_CARDS };
}

export function checkUnmatchedPair() {
    return { type: UNMATCHED_PAIR };
}

export function checkMatchedPair() {
    return { type: MATCHED_PAIR };
}

export function markPairAsMatched(id1, id2) {
    return { type: MARK_PAIR, id1, id2 }
}
export function flipDownPair(id1, id2) {
    return { type: FLIP_DOWN_PAIR, id1, id2 }
}

export function initGame(numPairs) {
    return { type: INIT_GAME, numPairs };
}
export function generatePairs(numPairs) {
    return { type: GENERATE_PAIRS, numPairs };
}


export function showNumCardsSelection() {
    return { type: SHOW_NUM_QUANTITY };
}







