import { prisma } from './src/lib/db'

async function main() {
    console.log('Seeding 100 random messages...')

    const messages = Array.from({ length: 100 }).map((_, i) => ({
        text: `Random Message #${i + 1}: ${Math.random().toString(36).substring(7)}`,
    }))

    await prisma.message.createMany({
        data: messages,
    })

    console.log('Successfully seeded 100 messages!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
