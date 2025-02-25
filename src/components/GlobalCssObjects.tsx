// Define styles as an object
import React from "react";

export const stylesPopover = {
  popoverContainer: {
    position: "fixed",
    top: "76px",
    right: "10px",
    width: "220px",
    border: "1px solid #e55353",
    borderRadius: "11px",
    background: "#fff",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "12px",
    zIndex: 1000
  },
  popoverArrow: {
    position: "absolute",
    top: "-10px",
    left: "50%",
    zIndex:"1000",
    transform: "translateX(-50%)",
    width: "0",
    height: "0",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "10px solid #e55353", // Arrow color same as border
  },
  popoverHeader: {
    background: "#e55353",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: "8px", // Fix border
    borderTopRightRadius: "8px", // Fix border
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
  popoverBody: {
    padding: '10px',
  },


}

export const switchBaseStyles: React.CSSProperties = {
  transition: "box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out",
  borderRadius: "2em",
};

export const switchCheckedStyles: React.CSSProperties = {
  backgroundColor: "#e55353",
  borderColor: "#e55353",
  boxShadow: "0 0 8px rgba(229, 83, 83, 0.7)",
};

export const switchUncheckedStyles: React.CSSProperties = {
  backgroundColor: "#ccc",
  borderColor: "#ccc",
  boxShadow: "none",
};

