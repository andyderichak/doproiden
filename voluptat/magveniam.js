const object = {
  method1() {
    // original method implementation
  },
  method2() {
    // original method implementation
  },
};

const extension = {
  method1() {
    // new or modified method implementation
  },
};

// Patch the object with the extension
Object.assign(object, extension);

// Now the object has the patched methods
object.method1(); // calls the patched method
object.method2(); // calls the original method
