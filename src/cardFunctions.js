export const PAIRS = 8;

export function GenerationCard(numPairs) {
  const cards = [];
  let id = 1;
  for (let i = 1; i <= numPairs; i++) {
    const cardOne = {
      id: id,
      image: i,
      imageUp: false,
      matched: false
    };
    id++;
    const cardTwo = {
      id: id,
      image: i,
      imageUp: false,
      matched: false
    };
    cards.push(cardOne);
    cards.push(cardTwo);
    id++;
  }

  return cards;
}

export function getCard(id, cards) {
  return cards.find((card) => card.id === id);
}

export function IdenticalImages(id1, id2, cards) {
  if (getCard(id1, cards).image === getCard(id2, cards).image) {
    return true;
  } else {
    return false;
  }
}
