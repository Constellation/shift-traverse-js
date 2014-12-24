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

const SPEC = {
  ArrayExpression: ['elements'],
  AssignmentExpression: ['binding', 'expression'],
  BinaryExpression: ['left', 'right'],
  Block: ['statements'],
  BlockStatement: ['block'],
  BreakStatement: ['label'],
  CallExpression: ['callee', 'arguments'],
  CatchClause: ['binding', 'body'],
  ComputedMemberExpression: ['object', 'expression'],
  ConditionalExpression: ['test', 'consequent', 'alternate'],
  ContinueStatement: ['label'],
  DataProperty: ['name', 'expression'],
  DebuggerStatement: [],
  DoWhileStatement: ['body', 'test'],
  EmptyStatement: [],
  ExpressionStatement: ['expression'],
  ForInStatement: ['left', 'right', 'body'],
  ForStatement: ['init', 'test', 'update', 'body'],
  FunctionBody: ['directives', 'statements'],
  FunctionDeclaration: ['name', 'parameters', 'body'],
  FunctionExpression: ['name', 'parameters', 'body'],
  Getter: ['name', 'body'],
  Identifier: [],
  IdentifierExpression: ['identifier'],
  IfStatement: ['test', 'consequent', 'alternate'],
  LabeledStatement: ['label', 'body'],
  LiteralBooleanExpression: [],
  LiteralNullExpression: [],
  LiteralNumericExpression: [],
  LiteralRegExpExpression: [],
  LiteralStringExpression: [],
  NewExpression: ['callee', 'arguments'],
  ObjectExpression: ['properties'],
  PostfixExpression: ['operand'],
  PrefixExpression: ['operand'],
  PropertyName: [],
  ReturnStatement: ['expression'],
  Script: ['body'],
  Setter: ['name', 'parameter', 'body'],
  StaticMemberExpression: ['object', 'property'],
  SwitchCase: ['test', 'consequent'],
  SwitchDefault: ['consequent'],
  SwitchStatement: ['discriminant', 'cases'],
  SwitchStatementWithDefault: ['discriminant', 'preDefaultCases', 'defaultCase', 'postDefaultCases'],
  ThisExpression: [],
  ThrowStatement: ['expression'],
  TryCatchStatement: ['body', 'catchClause'],
  TryFinallyStatement: ['body', 'catchClause', 'finalizer'],
  UnknownDirective: [],
  UseStrictDirective: [],
  VariableDeclaration: ['declarators'],
  VariableDeclarationStatement: ['declaration'],
  VariableDeclarator: ['binding', 'init'],
  WhileStatement: ['test', 'body'],
  WithStatement: ['object', 'body'],
};

export default SPEC;

/* vim: set sw=4 ts=4 et tw=80 : */
