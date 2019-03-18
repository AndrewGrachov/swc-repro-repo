const deco = (someString) => {
  return (MyClass) => {
    return (props) => {
      console.log('props!:', props);
      return {...props}
    }
  }
}

class BaseClass {

}

@deco('example')
export class MyClass extends BaseClass {

}