"use client"
import TypeIt from "typeit-react";

export default function TypeItText({ text }) {
    return <TypeIt options={{ strings: [text], speed: 20, waitUntilVisible: true }} />;
}
