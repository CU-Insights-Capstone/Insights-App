import React from "react";
import { StyleSheet } from "react-native";

export interface TextProp {
    children: React.ReactNode;
    color?: string;
    style?: any;
    onClick?: () => void;
}