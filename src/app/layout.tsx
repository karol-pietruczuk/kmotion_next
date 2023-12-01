import type {Metadata} from 'next'
import React from "react";
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    metadataBase: new URL('https://kmotion.pl'),
    title: 'KMotion Automatyka Przemysłowa',
    description: 'Projektowanie szaf automatyki i rozdzielnic elektrycznych. Programowanie sterowników PLC, np. Allen Bradley, Eaton, Mitsubishi, Siemens. Tworzenie wizualizacji na panelach HMI, np. Galileo, Allen Bradley, Siemens. Naprawa i przeróbki sterowania. Programowanie i naprawa uszkodzonych przemienników częstotliwości oraz serw, serwomechanizmów, serwowzmacniaczy i serwomotorów, np. Siemens, Delta, Danfoss, Omron, Lenze, Altivar. Generowanie schematów elektrycznych. Usuwanie usterek maszyn, prefabrykacja szaf sterowniczych. Tworzenie stron internetowych',
    applicationName: 'KMotion Website',
    keywords: ['Automatyka przemysłowa', 'Sterownik', 'PLC', 'HMI', 'Panel operatorski', 'Serwo', 'Serwomechanizm', 'Serwomotor', 'Serwowzmacniacz', 'Programowanie', 'Implementacja', 'Uruchomienie', 'System', 'Naprawa', 'Schemat elektryczny', 'Sterowanie', 'Enkoder', 'Falownik', 'Przemiennik częstotliwości', 'Siemens', 'Eaton', 'Allen Bradley', 'Mitsubishi'],
    referrer: 'origin',
    robots: 'index, follow',
    icons: 'https://kmotion.pl/kmotion.svg',
    openGraph: {
        type: 'website',
        url: 'https://kmotion.pl',
        siteName: 'KMotion Website',
        title: 'KMotion',
        description: 'Twój partner w automatyce przemysłowej',
        images: 'https://kmotion.pl/kmotion.svg',
    },
    formatDetection: {
        telephone: true,
    },
    category: 'Indsutry Automation',
    classification: 'Industry Automation'
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
