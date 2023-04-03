// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

export interface IResult {
    title: string
    id: string
    namespace: string
    description: string
    keyImages: Array<string>
    price: IPrice
    offerMappings: Array<Object>
    productSlug: string
}

interface IPrice {
    totalPrice: ITotalPrice
}

interface ITotalPrice {
    discountPrice: number,
    originalPrice: number,
    voucherDiscount: number,
    discount: number,
    currencyCode: string,
    currencyInfo: object,
    fmtPrice: object
    totalPrice: object
}
