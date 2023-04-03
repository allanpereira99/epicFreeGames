// SPDX-License-Identifier: MIT
// Copyright (c) 2023 Allan Pereira <https://github.com/allanpereira99>

import { IResult } from '../interfaces/result_interface';

export default abstract class HttpSereviceBase {
    abstract get(url: string): Promise<Array<IResult>>;
};