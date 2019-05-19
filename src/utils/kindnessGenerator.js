import faker from 'faker'

export default function kindnessGenerator(): { kindness: string, kind: number } {
  const kind = faker.random.number({ min: 5, max: 95 })
  if (kind < 33) {
    return { kindness: 'evil', kind }
  }
  return kind < 67
    ? { kindness: 'soso', kind }
    : { kindness: 'kind', kind }
}
