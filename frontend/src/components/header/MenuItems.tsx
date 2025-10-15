import clsx from 'clsx'
import { Badge } from '../ui'

export const MenuItems = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <ul
      className={clsx('flex flex-col xl:flex-row items-center gap-6 mr-4', {
        'w-full': menuOpen,
      })}
    >
      <li className="xl:ms-auto">
        <Badge
          variant="secondary"
          className="bg-green-500/10 text-green-400 border-green-500/20"
        >
          Testnet
        </Badge>
      </li>
    </ul>
  )
}
