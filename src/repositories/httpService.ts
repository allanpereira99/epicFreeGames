// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import axios from 'axios';
import HttpSereviceBase from './httpService_base';
import { IResult } from '../interfaces/result_interface';

export class HttpService extends HttpSereviceBase {
    async get(url: string): Promise<Array<IResult>> {
        const res = await axios(url);
        return res.data.data.Catalog.searchStore.elements;
    };
};