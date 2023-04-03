// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import { IResult } from "../interfaces/result_interface";

export class ResultEpic {
    data: IResult

    constructor(json: IResult) {
        this.data = json
    }

    static fromJSON(json: IResult): ResultEpic {
        return new ResultEpic({
            title: json.title,
            description: json.description,
            id: json.id, namespace: json.namespace,
            keyImages: json.keyImages,
            price: json.price,
            offerMappings: json.offerMappings,
            productSlug: json.productSlug

        });
    }
}