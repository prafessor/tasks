class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value.padEnd(this.#value.length + str.length, str);
  }
  padStart(str) {
    this.#value = this.#value.padStart(this.#value.length + str.length, str);
  }
  padBoth(str) {
    this.#value = this.#value
      .padStart(this.#value.length + str.length, str)
      .padEnd(this.#value.length + str.length * 2, str);
  }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
