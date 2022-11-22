import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Button>Test</Button>} />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    )
};