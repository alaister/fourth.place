import type { Task } from 'graphile-worker'
import { z } from 'zod'

const schema = z.object({})

const my_task: Task = async function (payload, helpers) {
  const {} = schema.parse(payload)

  helpers.logger.info('All Done')
}

module.exports = my_task
