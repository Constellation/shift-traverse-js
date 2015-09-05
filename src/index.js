/*
  Copyright (C) 2014 Yusuke Suzuki <utatane.tea@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import Spec from 'shift-spec'
import * as objectAssign from 'object-assign'
import { version } from '../package.json'

// Loading uncached estraverse for changing estraverse.Syntax.
const estraverse = require('estraverse').cloneEnvironment();

// Adjust estraverse members.

Object.keys(estraverse.Syntax).filter(key => key !== 'Property').forEach((key) => {
    delete estraverse.Syntax[key];
    delete estraverse.VisitorKeys[key];
});

objectAssign(estraverse.Syntax, Object.keys(Spec).reduce((result, key) => {
    result[key] = key;
    return result;
}, {}));

objectAssign(estraverse.VisitorKeys, Object.keys(Spec).reduce((result, key) => {
    result[key] = Spec[key].fields.map(field => field.name);
    return result;
}, {}));

estraverse.version = version;
module.exports = estraverse;

/* vim: set sw=4 ts=4 et tw=80 : */
