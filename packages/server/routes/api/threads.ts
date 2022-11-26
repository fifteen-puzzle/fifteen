import { Router } from 'express'
import { createThread, getThreadsByTopic, getThread } from '../models/thread'
import { Thread } from '../../db'

const router = Router()

router.post(createThread.route, async (req, res) => {
  const newThread = await Thread.create({
    author_id: req.body.authorId,
    topic_id: req.body.topicId,
    text: req.body.text,
  })
  await newThread.save()
  const result: createThread.Response = req.body.authorId
  res.send(result)
})

router.get(getThread.route, async (req, res) => {
  const { id, topicId } = req.body
  const thread = await Thread.findOne({
    where: {
      id: id,
      topic_id: topicId,
    },
  })
  let result = {}
  if (thread) {
    result = {
      authorId: thread.dataValues.author_id,
      text: thread.dataValues.text,
      createdAt: thread.dataValues.createdAt,
    }
  }
  res.send(result)
})

router.get(getThreadsByTopic.route, async (req, res) => {
  const { topic, quantity, start } = req.body
  const threads = await Thread.findAll({
    where: {
      topic_id: topic,
    },
    order: [['createdAt', 'ASC']],
  })
  const aThread = threads.slice(start, quantity)
  const result = aThread.map(thread => {
    return {
      authorId: thread.dataValues.author_id,
      text: thread.dataValues.text,
      createdAt: thread.dataValues.createdAt,
    }
  })
  res.send(result)
})

export default router