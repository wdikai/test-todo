/* @flow */

export type TodoType = {
  title: string,
  isChecked: boolean,
};

export type EventHandlerType = (e: Event) => void;