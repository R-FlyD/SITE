/* eslint-disable camelcase */
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

  app.get('/productID/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.coerce.number().int(),
    })

    const { id } = paramsSchema.parse(request.params)

    const product = await prisma.product_identification.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return product
  })

  // app.get('/productss/:cody', async (request) => {
  //   const paramsSchema = z.object({
  //     cody_RFID: z.string(),
  //   })
  //   console.log(request.body)

  //   const { cody_RFID } = paramsSchema.parse(request.body)
  //   console.log(request.body)
  //   const products = await prisma.product_identification.findMany({
  //     orderBy: {
  //       cody_RFID: 'asc',
  //     },
  //   })

  //   for (let i = 0; i < products.length; i++) {
  //     const element = products[i]
  //     if (element.cody_RFID === cody_RFID) {
  //       console.log(element)
  //       return element
  //     }
  //   }
  // })

  app.get('/state', async () => {
    const control = await prisma.product_identification.findMany({
      orderBy: {
        id: 'asc',
      },
    })

    return control
  })

  app.get('/products/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.coerce.number().int(),
    })

    const { id } = paramsSchema.parse(request.params)

    const prod = await prisma.product.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return prod
  })

  app.get('/historic', async () => {
    const products = await prisma.historic.findMany({
      orderBy: {
        date: 'desc',
      },
    })
    return products
  })

  // TESTE (imagem)
  app.post('/products', async (request) => {
    const bodyShema = z.object({
      name: z.string(),
      type: z.string(),
      // cost: z.coerce.boolean().default(false),
      cost: z.coerce.number(),
      image: z.string(),
      description: z.string(),
    })
    const { name, type, cost, image, description } = bodyShema.parse(
      request.body,
    )
    const prod = await prisma.product.create({
      data: {
        name,
        type,
        cost,
        image,
        description,
      },
    })
    return prod
  })

  app.put('/mode', async (request) => {
    const paramsSchema = z.object({
      relays: z.coerce.boolean(),
    })
    const { relays } = paramsSchema.parse(request.body)
    await prisma.control.update({
      select: {
        id: true,
        relay: true,
      },
      where: {
        id: 1,
      },
      data: {
        relay: relays,
      },
    })
    console.log(relays)
  })
  app.put('/modes', async (request) => {
    const relays = true
    await prisma.control.update({
      select: {
        id: true,
        relay: true,
      },
      where: {
        id: 1,
      },
      data: {
        relay: relays,
      },
    })
    console.log(relays)
  })

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
