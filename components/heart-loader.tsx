import React from 'react'
import styles from './heart-loader.module.css'
import { cn } from '@/lib/utils'

export function HeartLoader() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader} />
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-dancing font-bold text-amber-500 tracking-wide animate-pulse">
                    Anattoli
                </h3>
                <p className="text-stone-400 text-sm tracking-widest uppercase">
                    Aguarde um momento...
                </p>
            </div>
        </div>
    )
}
