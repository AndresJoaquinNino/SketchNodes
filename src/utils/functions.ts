export function generateShortUUID(): string{
    return 'xxxxx'.replace(/[x]/g, () => {
        const random = (Math.random() * 16) | 0
        return random.toString(16)
    })
}
