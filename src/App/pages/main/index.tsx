import { useEffect } from 'react'

import { getSitesAllSlice } from '@entities'
import Button from '@shared/ui/components/button'

import styles from './index.module.scss'

import type { ReactNode } from 'react'

const MainPage = (): ReactNode => {
  useEffect(() => {
    getSitesAllSlice().then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className={ styles.common }>
      <Button>
        123
      </Button>
    </div>
  )
}

export default MainPage
