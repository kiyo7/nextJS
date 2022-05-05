import Link from 'next/link'

interface Props {
  path: string
  testId: string
  label: string
}

const HeaderLink: React.FC<Props> = ({ path, testId, label }) => {
  return (
    <Link href={path}>
      <a
        data-testid={testId}
        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
      >
        {label}
      </a>
    </Link>
  )
}

export default HeaderLink
