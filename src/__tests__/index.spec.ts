import FluentFaker from '../index';

describe('FluentFaker test', () => {
  it('should return a fluent faker instance', () => {
    const fluentFaker = FluentFaker.make();
    expect(fluentFaker).toBeInstanceOf(FluentFaker);
  });

  it('should can chaining rule', () => {
    const object = FluentFaker.make().rule('name', rule =>
      rule.name.findName()
    );
    expect(object.rule).toBeDefined();
  });

  it('should return json object', () => {
    const object = FluentFaker.make()
      .rule('name', rule => rule.name.findName())
      .build();

    expect(object.name).toBeDefined();
  });

  it('should return form data', () => {
    const formData = FluentFaker.make()
      .rule('name', rule => rule.name.findName())
      .buildAsFormData();

    expect(formData).toBeDefined();
  });
});
