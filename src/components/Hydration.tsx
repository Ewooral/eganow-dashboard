"use client";

import * as React from "react";
import {usePopoverStore} from "@/store";

const Hydration: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    // @ts-ignore
    usePopoverStore?.persist?.rehydrate();
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
};

export default Hydration;





