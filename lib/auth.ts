export interface StatusHistoryEntry {
  id: string
  status: string
  changedBy: string
  changedAt: string
  comment: string
  estimatedHours?: number
  assignedTo?: string
}

export interface Requirement {
  id: string
  title: string
  description: string
  department: string
  priority: string
  status: string
  submittedBy: string
  submittedAt: string
  estimatedHours?: number
  category?: string
  businessJustification?: string
  affectedUsers?: string
  adminNotes?: string
  assignedTo?: string
  expectedDelivery?: string
  statusHistory?: StatusHistoryEntry[]
}

export interface User {
  id: string
  username: string
  name: string
  department: string
  roleId: string
  permissions?: string[]
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

const rolePermissions: Record<string, string[]> = {
  admin: [
    "view_requirements",
    "create_requirements",
    "review_requirements",
    "manage_roles",
    "manage_settings",
    "view_analytics",
    "manage_tasks",
    "manage_duty",
    "manage_meetings",
  ],
  manager: [
    "view_requirements",
    "create_requirements",
    "review_requirements",
    "view_analytics",
    "manage_tasks",
    "manage_duty",
    "manage_meetings",
  ],
  engineer: ["view_requirements", "manage_tasks", "manage_duty"],
  user: ["view_requirements", "create_requirements"],
}

export function getUserPermissions(user: { roleId: string }): string[] {
  return rolePermissions[user.roleId] || rolePermissions.user
}

export const mockUsers: User[] = [
  {
    id: "1",
    username: "admin",
    name: "系统管理员",
    department: "信息科",
    roleId: "admin",
  },
  {
    id: "2",
    username: "manager",
    name: "科室主任",
    department: "信息科",
    roleId: "manager",
  },
  {
    id: "3",
    username: "engineer",
    name: "李开发",
    department: "信息科",
    roleId: "engineer",
  },
  {
    id: "4",
    username: "user",
    name: "张医生",
    department: "门诊部",
    roleId: "user",
  },
]
