import * as jspb from 'google-protobuf'



export class Date extends jspb.Message {
  getYear(): number;
  setYear(value: number): Date;

  getMonth(): number;
  setMonth(value: number): Date;

  getDay(): number;
  setDay(value: number): Date;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Date.AsObject;
  static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
  static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Date;
  static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
  }
}

export class Employee extends jspb.Message {
  getLastname(): string;
  setLastname(value: string): Employee;

  getFirstname(): string;
  setFirstname(value: string): Employee;

  getBirthday(): Date | undefined;
  setBirthday(value?: Date): Employee;
  hasBirthday(): boolean;
  clearBirthday(): Employee;

  getGender(): Employee.Gender;
  setGender(value: Employee.Gender): Employee;

  getPosition(): Employee.Position;
  setPosition(value: Employee.Position): Employee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Employee.AsObject;
  static toObject(includeInstance: boolean, msg: Employee): Employee.AsObject;
  static serializeBinaryToWriter(message: Employee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Employee;
  static deserializeBinaryFromReader(message: Employee, reader: jspb.BinaryReader): Employee;
}

export namespace Employee {
  export type AsObject = {
    lastname: string,
    firstname: string,
    birthday?: Date.AsObject,
    gender: Employee.Gender,
    position: Employee.Position,
  }

  export enum Gender { 
    MALE = 0,
    FEMALE = 1,
    NEITHER = 2,
    NOT_ANSWER = 3,
  }

  export enum Position { 
    FULL_TIME = 0,
    PART_TIME = 1,
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getEmployeesList(): Array<Employee>;
  setEmployeesList(value: Array<Employee>): ListResponse;
  clearEmployeesList(): ListResponse;
  addEmployees(value?: Employee, index?: number): Employee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    employeesList: Array<Employee.AsObject>,
  }
}

