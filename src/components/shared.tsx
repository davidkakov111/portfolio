import { CircularProgress, useTheme } from "@mui/material";
import { Html } from "@react-three/drei";

// Loader component to show a loading spinner with theme-based color
export function LoaderSpinner() {
  const theme = useTheme();
  const color = theme.palette.mode === "dark" ? "#fff" : "#000"; // white in dark mode, black in light mode

  return (
    <Html center>
      <CircularProgress 
        size={80}
        thickness={5}
        sx={{ color }}
      />
    </Html>
  );
}
