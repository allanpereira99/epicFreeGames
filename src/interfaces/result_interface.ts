// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

interface IPrice {
    totalPrice: ITotalPrice
}
interface ITotalPrice {
    discountPrice: number,
    originalPrice: number,
    voucherDiscount: number,
    discount: number,
    currencyCode: string,
    currencyInfo: ICurrencyInfo,
    fmtPrice: IFmtPrice
}
interface ICurrencyInfo {
    decimals: number
}
interface IFmtPrice {
    originalPrice: string,
    discountPrice: string,
    intermediatePrice: string
}
interface IOfferMappings {
    pageSlug: string,
    pageType: string
}
export interface IResult {
    title: string
    id: string
    namespace: string
    description: string
    keyImages: Array<string>
    price: IPrice
    offerMappings: Array<IOfferMappings>
    productSlug: string
}