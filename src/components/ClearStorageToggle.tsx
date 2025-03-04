import { usePopoverStore } from "@/store";
import { clearCookies, clearLocalStorage } from "@/util";
import React from "react";

const ClearStorageToggle = () => {
  const { clearEnabled, setClearEnabled } = usePopoverStore();

  const handleToggle = () => {
    setClearEnabled(!clearEnabled);

    if (!clearEnabled) {
      clearLocalStorage();
    //   clearCookies();
    }
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="clearStorageSwitch"
        checked={clearEnabled}
        onChange={handleToggle}
      />
      <label className="form-check-label" htmlFor="clearStorageSwitch">
        Enable Auto Clear
      </label>
    </div>
  );
};

export default ClearStorageToggle;
