import Control from '@/components/Control'

export default function control() {
  /* @ts-expect-error Asycn Server Component */
  return <Control />
}
