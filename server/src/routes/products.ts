import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function productsRoutes(app: FastifyInstance) {
  app.get('/products', async () => {
    const products = await prisma.product_identification.findMany({
      orderBy: {
        cody_RFID: 'asc',
      },
    })

    return products
  })

  app.get('/products/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.coerce.number().int(),
    })

    const { id } = paramsSchema.parse(request.params)

    const product = await prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return product
  })

  app.post('/products', async (request) => {
    // const bodyShema = z.object({
    //   content: z.string(),
    //   coverUrl: z.string(),
    //   isPublic: z.coerce.boolean().default(false),
    // })
    // const { content, coverUrl, isPublic } = bodyShema.parse(request.body)
    // const memory = await prisma.memory.create({
    //   data: {
    //     content,
    //     coverUrl,
    //     isPublic,
    //     userId: request.user.sub,
    //   },
    // })
    // return memory
  })

  app.put('/products/:id', async () => {})

  app.delete('/products/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.number().int(),
    })

    const { id } = paramsSchema.parse(request.params)

    await prisma.product.delete({
      where: {
        id,
      },
    })
  })
}
