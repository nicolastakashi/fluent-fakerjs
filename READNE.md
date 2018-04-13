# Fluent FakerJS

Fluent FakerJS is a module built on top of [FakerJS] to help you write fake date using a fluent api.

## Example

Build JSON Object.

```
import FluentFaker from 'fluentfaker'

const object = FluentFaker.make()
      .rule('name', rule => rule.name.findName())
      .rule('email', rule => rule.internet.email())
      .rule('jobtitle', rule => rule.name.jobTitle())
      .build();
```

Build Form Data

```
import FluentFaker from 'fluentfaker'

const object = FluentFaker.make()
      .rule('name', rule => rule.name.findName())
      .rule('email', rule => rule.internet.email())
      .rule('jobtitle', rule => rule.name.jobTitle())
      .buildAsFormData();
```

## Rules available

Visit [FakerJS] page to get more details all methods that can be used in Fluent Faker rules.

[fakerjs]: https://github.com/Marak/faker.js

## Tests

```
yarn

yarn test
```

## Building Fluent FakerJS

Fluent FakerJS uses typescript and yarn, you just need run `yarn` to install dependencies and you're welcome to fix a bug or add a new feature.

Feel free to open a issue or send a pull request.
