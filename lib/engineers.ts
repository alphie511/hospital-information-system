export interface Engineer {
  id: string
  name: string
  department: string
  skills: string[]
  currentTasks: number
  maxTasks: number
}

export interface EngineerTask {
  id: string
  engineerId: string
  title: string
  status: string
  priority: string
  startDate: string
  endDate?: string
  progress: number
}

export const mockEngineers: Engineer[] = [
  {
    id: "1",
    name: "李开发",
    department: "信息科",
    skills: ["前端开发", "React", "Vue"],
    currentTasks: 3,
    maxTasks: 5,
  },
  {
    id: "2",
    name: "王开发",
    department: "信息科",
    skills: ["后端开发", "Java", "Python"],
    currentTasks: 2,
    maxTasks: 5,
  },
  {
    id: "3",
    name: "赵开发",
    department: "信息科",
    skills: ["全栈开发", "Node.js", "数据库"],
    currentTasks: 4,
    maxTasks: 5,
  },
]

export const mockEngineerTasks: EngineerTask[] = [
  {
    id: "1",
    engineerId: "1",
    title: "门诊预约系统优化",
    status: "in_progress",
    priority: "high",
    startDate: "2024-01-20",
    progress: 60,
  },
  {
    id: "2",
    engineerId: "2",
    title: "药房库存管理功能",
    status: "in_progress",
    priority: "medium",
    startDate: "2024-01-18",
    progress: 30,
  },
  {
    id: "3",
    engineerId: "1",
    title: "患者信息查询接口",
    status: "completed",
    priority: "low",
    startDate: "2024-01-10",
    endDate: "2024-01-15",
    progress: 100,
  },
]
