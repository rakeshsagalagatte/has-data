<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

[has_data](https://github.com/rakeshsagalagatte/has_data) function is used to check the object is `null`, `undefined`, `''` (Empty), empty `map` and `set` and `[]`. 
If we have data it will return `true` else `flase` .


## Installation

```bash
$ npm install has-data
```

## Usage of package

```bash
import { has_data } from '@rakeshsagalagatte/has_data'

# watch mode
console.log(has_data(Array.of(['2', '3'])))  // result to true
console.log(has_data('a'))  // result to true
console.log(has_data(23))  // result to true
console.log(has_data({ 'name':'abcd' }))  // result to true
console.log(has_data(''))  // result to flase
console.log(has_data(null))  // result to flase
console.log(has_data(undefined))  // result to flase
console.log(has_data([]))  // result to flase