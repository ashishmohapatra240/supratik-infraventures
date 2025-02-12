import localFont from 'next/font/local'

export const archivo = localFont({
    src: [
        {
            path: '../public/fonts/Archivo/Archivo_Expanded-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Archivo/Archivo_Expanded-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/Archivo/Archivo_Expanded-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-archivo'
}) 