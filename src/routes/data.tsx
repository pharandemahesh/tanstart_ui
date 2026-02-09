import { createFileRoute } from '@tanstack/react-router'
import DataView from '../view/data/index.tsx'


export const Route = createFileRoute('/data')({
  component: DataView,
})
