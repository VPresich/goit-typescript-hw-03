class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, private name: string) {}

  getKey(): Key {
    return this.key;
  }

  getName(): string {
    return this.name;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];
  protected key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      this.closeDoor();
      console.log(`${person.getName()} is comming`);
    } else {
      console.log("The door is closed");
    }
  }

  getAllTenants(): void {
    console.log("Tenants in the house:");
    this.tenants.forEach((tenant) => {
      console.log(`${tenant.getName()}`);
    });
  }

  isDoorOpen(): boolean {
    return this.door;
  }

  closeDoor(): void {
    this.door = false;
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (this.key === key) {
      this.door = true;
      console.log("Key is good. The door is opening.");
    } else {
      console.log("Key is bad. The door is closed.");
    }
  }
}

const keyHome = new Key();
const keyOther = new Key();

const myHouse = new MyHouse(keyHome);

const mark = new Person(keyHome, "Mark");
const mary = new Person(keyHome, "Mary");
const bob = new Person(keyOther, "Bob");

myHouse.openDoor(mark.getKey());
myHouse.comeIn(mark);

myHouse.openDoor(bob.getKey());
myHouse.comeIn(bob);

myHouse.openDoor(mary.getKey());
myHouse.comeIn(mary);

myHouse.getAllTenants();

export { Key, MyHouse, Person };
