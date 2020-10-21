import React, { FunctionComponent } from "react";

interface IUsername {
  name: string;
}

export const Username: FunctionComponent<IUsername> = ({ name }) => (
  <div>{name}</div>
);

export default Username;
