import { profile } from '../settings'
import { template } from '../settings'

export function highlightAuthor(authors: string): string{
	const author = authors.split(', ')
	if (author.includes(profile.author_name)){
		return authors.replace(profile.author_name, `<span class='font-medium underline'>${profile.author_name}</span>`)
	}
	return authors
}

export function trimExcerpt(excerpt: string): string {
	const excerptLength = template.excerptLength
	return excerpt.length > excerptLength ? `${excerpt.substring(0, excerptLength)}...` : excerpt
}

export const orderByTime = <T extends { time: string }>(items: T[]): T[] => {
	const presentValues = ['present', 'now', 'current', 'today']
	return [...items].sort((a, b) => {
		const aParts = (a.time as string)?.split(' - ')
		const bParts = (b.time as string)?.split(' - ')

		const aEnd = aParts[1] ?? aParts[0]
		const bEnd = bParts[1] ?? bParts[0]

		if (presentValues.includes((aEnd as string).toLowerCase())) return -1
		if (presentValues.includes((bEnd as string).toLowerCase())) return 1

		const dateA = new Date(aEnd)
		const dateB = new Date(bEnd)
		return dateB.getTime() - dateA.getTime()
	})
}
