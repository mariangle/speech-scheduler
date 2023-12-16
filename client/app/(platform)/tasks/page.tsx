import TaskService from '@/services/task-service'
import * as React from 'react'

interface TasksPageProps {
  searchParams: { [key: string]: string | boolean }
}

async function TasksPage({ searchParams }: TasksPageProps) {
  const tasks = await TaskService.getTasks(searchParams)

  // TODO: Reversing to get newest but probably should do it through API

  return (
    <div className="space-y-2 lg:space-y-4">
      <div className="flex"></div>
    </div>
  )
}

export default TasksPage