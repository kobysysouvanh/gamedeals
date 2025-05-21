type Game = {
    internalName: string,
    title: string,
    metacriticLink: string,
    dealID: string,
    storeID: string,
    gameID: string,
    salePrice: string,
    normalPrice: string,
    isOnSale: string,
    savings: string,
    metacriticScore: string,
    steamRatingText: string,
    steamRatingPercent: string,
    steamRatingCount: string,
    steamAppID: string,
    releaseDate: number,
    lastChange: number,
    dealRating: string,
    thumb: string,

}

type SearchedGame = {
    gameID: string,
    steamAppID: string | null,
    cheapest: string,
    cheapestDealID: string,
    external: string
    internalName: string,
    thumb: string
}