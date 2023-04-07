// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import { ILocale } from './interfaces/locale_interface';
import { ResultEpic } from './utils/resultEpic_mapper';
import { HttpService } from './repositories/httpService';

export async function getFreeGames(locale: ILocale) {
    const API_BASE_URL = 'https://store-site-backend-static-ipv4.ak.epicgames.com/'
    const httpService = new HttpService();
    const response = await httpService.get(`${API_BASE_URL}freeGamesPromotions?locale=${locale.language}&country=${locale.countryCode}&allowCountries=${locale.countryCode}`);
    return response.reduce((previousValue: Array<ResultEpic>, currentValue) => {
        const resultEpic = ResultEpic.fromJSON(currentValue);
        if (resultEpic.data.price.totalPrice.discountPrice == 0 && resultEpic.data.price.totalPrice.discount > 0) {
            previousValue.push(resultEpic);
        }
        return previousValue;
    }, []);
}