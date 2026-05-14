import React, { useEffect } from "react";

import Routes from "./Routes";

import {
  setupDatabase,
} from "./core";

export default function App(): React.JSX.Element {

  useEffect(() => {

    setupDatabase();

  }, []);

  return <Routes />;
}