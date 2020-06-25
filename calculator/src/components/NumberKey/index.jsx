import React from "react";

import { KeyContainer } from "./styles";

export default function NumberKey({ children, darkMode = false }) {
  return <KeyContainer darkMode={darkMode}>{children}</KeyContainer>;
}
