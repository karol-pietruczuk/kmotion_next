import type {Metadata} from 'next'
import React from "react";
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'KMotion Automatyka Przemysłowa',
    description: 'Projektowanie szaf automatyki i rozdzielnic elektrycznych. Programowanie sterowników PLC, np. Allen Bradley, Eaton, Mitsubishi, Siemens. Tworzenie wizualizacji na panelach HMI, np. Galileo, Allen Bradley, Siemens. Naprawa i przeróbki sterowania. Programowanie i naprawa uszkodzonych przemienników częstotliwości oraz serw, serwomechanizmów, serwowzmacniaczy i serwomotorów, np. Siemens, Delta, Danfoss, Omron, Lenze, Altivar. Generowanie schematów elektrycznych. Usuwanie usterek maszyn, prefabrykacja szaf sterowniczych. Tworzenie stron internetowych',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pl">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
