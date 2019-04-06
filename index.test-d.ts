import {expectType} from 'tsd';
import dotProp = require('.');

expectType<unknown>(dotProp.get({foo: {bar: 'unicorn'}}, 'foo.bar'));
expectType<unknown>(dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep'));
expectType<string>(
	dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep', 'default value')
);
expectType<unknown>(
	dotProp.get({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot')
);

const obj = {foo: {bar: 'a'}};
expectType<typeof obj>(dotProp.set(obj, 'foo.bar', 'b'));

expectType<boolean>(dotProp.has({foo: {bar: 'unicorn'}}, 'foo.bar'));

expectType<void>(dotProp.delete({foo: {bar: 'a'}}, 'foo.bar'));
