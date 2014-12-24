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

import * as assert from 'power-assert'
import parse from 'shift-parser'
import { traverse } from '../'

describe('traverse', () => {
    it('enter', () => {
        let code = `
        function test() {
            console.log("HELLO WORLD");
        }
        `;
        let tree = parse(code);
        let result = [];
        traverse(tree, {
            enter(node) {
                result.push(node.type);
            }
        });
        assert.deepEqual(result, [
            'Script',
            'FunctionBody',
            'FunctionDeclaration',
            'Identifier',
            'FunctionBody',
            'ExpressionStatement',
            'CallExpression',
            'StaticMemberExpression',
            'IdentifierExpression',
            'Identifier',
            'Identifier',
            'LiteralStringExpression'
        ]);
    });

    it('leave', () => {
        let code = `
        function test() {
            console.log("HELLO WORLD");
        }
        `;
        let tree = parse(code);
        let result = [];
        traverse(tree, {
            leave(node) {
                result.push(node.type);
            }
        });
        assert.deepEqual(result, [
            'Identifier',
            'Identifier',
            'IdentifierExpression',
            'Identifier',
            'StaticMemberExpression',
            'LiteralStringExpression',
            'CallExpression',
            'ExpressionStatement',
            'FunctionBody',
            'FunctionDeclaration',
            'FunctionBody',
            'Script'
        ]);
    });

    it('both', () => {
        let code = `
        function test() {
            console.log("HELLO WORLD");
        }
        `;
        let tree = parse(code);
        let result = [];
        traverse(tree, {
            enter(node) {
                result.push(`enter:${node.type}`);
            },

            leave(node) {
                result.push(`leave:${node.type}`);
            }
        });
        assert.deepEqual(result, [
            'enter:Script',
            'enter:FunctionBody',
            'enter:FunctionDeclaration',
            'enter:Identifier',
            'leave:Identifier',
            'enter:FunctionBody',
            'enter:ExpressionStatement',
            'enter:CallExpression',
            'enter:StaticMemberExpression',
            'enter:IdentifierExpression',
            'enter:Identifier',
            'leave:Identifier',
            'leave:IdentifierExpression',
            'enter:Identifier',
            'leave:Identifier',
            'leave:StaticMemberExpression',
            'enter:LiteralStringExpression',
            'leave:LiteralStringExpression',
            'leave:CallExpression',
            'leave:ExpressionStatement',
            'leave:FunctionBody',
            'leave:FunctionDeclaration',
            'leave:FunctionBody',
            'leave:Script'
        ]);
    });
})

/* vim: set sw=4 ts=4 et tw=80 : */
