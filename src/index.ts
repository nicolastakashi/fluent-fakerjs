import * as Faker from 'faker';
import * as FormData from 'form-data';

class FluentFaker {
  public static make() {
    return new FluentFaker();
  }

  private object: any = {};

  public rule(
    field: string,
    rule: (args: Faker.FakerStatic) => any
  ): FluentFaker {
    this.object = { ...this.object, [field]: rule(Faker) };
    return this;
  }

  public build() {
    return this.object;
  }

  public buildAsFormData() {
    const formData = new FormData();
    const object = this.object;
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }
}

export default FluentFaker;
