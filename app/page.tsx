"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, CheckCircle, AlertCircle, Shield } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"
import { UserMenu } from "@/components/auth/user-menu"
import { PermissionGuard } from "@/components/auth/permission-guard"
import { RoleManagement } from "@/components/auth/role-management"
import { RequirementList } from "@/components/requirements/requirement-list"
import { EngineerList } from "@/components/engineers/engineer-list"
import { TaskProgressDashboard } from "@/components/tasks/task-progress-dashboard"
import { TaskAssignmentDashboard } from "@/components/assignments/task-assignment-dashboard"
import { AnalyticsOverview } from "@/components/dashboard/analytics-overview"
import { Sidebar } from "@/components/dashboard/sidebar"
import { mockUsers, getUserPermissions } from "@/lib/auth"
import { mockEngineers, mockEngineerTasks } from "@/lib/engineers"
import type { User, AuthState, Requirement } from "@/lib/auth"
import { SystemSettings } from "@/components/settings/system-settings"
import { DepartmentManagement } from "@/components/settings/department-management"
import { TaskLabelManagement } from "@/components/settings/task-label-management"
import { DutyRecordList } from "@/components/duty/duty-record-list"
import { DutyScheduleManagement } from "@/components/duty/duty-schedule-management"\极速赛车开奖直播
import { DutyAnalytics } from "@/components/duty/duty-analytics"
import { DutyIssueToTask } from "@/components/duty/duty-issue-to-task"
import { TaskManagementDashboard } from "@/components/task-management/task-management-dashboard"
import { MeetingManagementDashboard } from "@/components/meeting-management/meeting-management-dashboard"
import { TaskProgressTracking } from "@/极速赛车开奖直播components/task-management/task-progress-tracking"

const mockRequirements: Requirement[] = [
  {
    id: "1",
    title: "门诊预约系统优化",
    description: "需要优化门诊预约系统的用户界面，提高患者预约效率",
    department: "门诊部",
    priority: "high",
    status: "reviewing",
    submittedBy: "张医生",
    submittedAt: "2024-01-15",
    estimatedHours: 40,
    category: "系统优化",
    businessJustification: "提高患者满意度，减少排队时间",
    affectedUsers: "全院患者、门诊医生、护士",
    adminNotes: "需要与门诊部进一步沟通具体需求",
    assignedTo: "李开发",
    statusHistory: [
      {
        id: "1-1",
        status: "reviewing",
        changedBy: "系统管理员",
        changed极速赛车开奖直播At: "2024-01-16",
        comment: "开始评估需求可行性",
        estimatedHours: 40,
      },
      {
        id: "1-2",
        status: "pending",
        changedBy: "张医生",
        changedAt: "2024-01-15",
        comment: "初始提交",
      },
    ],
  },
  {
    id: "2",
    title: "药房库存管理功能",
    description: "增加药品库存预警功能，当库存低于安全值时自动提醒",
    department: "药剂科",
    priority: "medium",极速赛车开奖直播
    status: "approved",
极速赛车开奖直播    submittedBy: "李药师",
    submittedAt: "2024-01-14",
    estimatedHours极速赛车开奖直播: 24,
    category: "新功能开发",
    businessJustification: "避免药品断货，提高库存管理效率",
    affectedUsers: "药剂科全体人员",
    adminNotes: "已批准，安排下周开始开发",
    assignedTo: "王开发",
    statusHistory: [
      {
        id: "2-1",
        status: "approved",
        changedBy: "系统管理员",
        changedAt: "2024-01-17",
        comment: "需求评估完成，批准开发",
        estimatedHours: 24,
        assignedTo: "王开发",
      },
      {
        id: "2-2",
        status: "reviewing",
        changedBy: "系统管理员",
        changedAt: "2024-01-15",
        comment: "开始技术评估",
      },
      {
        id: "2-3",
        status: "pending",
        changedBy: "李药师",
        changedAt: "2024-01-14",极速赛车开奖直播
        comment: "初始提交",
      },
    ],
  },
  {
    id: "3",
    title: "手术排程系统",
    description: "开发新的手术排程管理系统，支持多科室协调",
    department: "手术室",
    priority: "urgent",
    status: "pending",
    submittedBy: "王主任",
    submittedAt: "2024-01-16",
    estimatedHours: 80,
    category: "新功能开发",
    businessJustification: "提高手术室利用率，优化资源配置",
    affectedUsers: "手术室、各手术科室医生",
    expectedDelivery: "2024-03-01",
    statusHistory: [
      {
        id: "3-极速赛车开奖直播1",
        status: "pending",
        changedBy: "王主任",
        changedAt: "2024-01-16",
        comment: "紧急需求，请尽快处理",
      },
    ],
  },
]

const departments = ["门诊部", "急诊科", "内科", "外科", "妇产科", "儿科", "药剂科", "检验科", "影像科", "手术室"]

export default function HospitalRequirementSystem() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  })
  const [requirements, setRequirements] = useState<Requirement[]>(mockRequirements)
  const [users, setUsers] = useState<User[]>(mockUsers) // 添加用户状态管理
  const [activeTab, setActiveTab] = useState("overview")
  const [showRequirementForm, setShowRequirementForm] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem("hospital-user")
    if (savedUser) {
      const user = JSON.parse(savedUser)
      user.permissions = getUserPermissions(user)
      console.log("[v0] Restored user from localStorage:", user.username, "permissions:", user.permissions)
      setAuthState({ user, isAuthenticated: true })
    }
  }, [])

  const handleLogin = (user: User) => {
    const updatedUser = { ...user, permissions: getUserPermissions(user) }
    console.log(
      "[v0] User logged in:",
      updatedUser.username,
      "role:",
      updatedUser.roleId,
      "permissions:",
      updatedUser.permissions,
    )

    setAuthState({ user: updated极速赛车开奖直播User, isAuthenticated: true })
    localStorage.setItem("hospital-user", JSON.stringify(updatedUser))
  }

  const handleLogout = () => {
    setAuthState({ user: null, isAuthenticated: false })
    localStorage.removeItem("hospital-user")
  }

  const handleUpdateUserRole = (userId: string, role极速赛车开奖直播Id: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, roleId, permissions: getUserPermissions({ ...user, roleId }) } : user,
      ),
    )

    // 如果更新的是当前用户，同时更新认证状态
    if (authState.user?.id === userId) {
      const updatedUser = { ...authState.user, roleId, permissions: getUserPermissions({ ...authState.user, roleId }) }
      setAuthState({ user: updatedUser, isAuthenticated: true })
      localStorage.setItem("hospital-user", JSON.stringify(updatedUser))
    }
  }

  const handleRequirementSubmit = (formData: any) => {
    const newRequirement: Requirement = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      department: authState.user?.department || "",
      priority: formData.priority,
      status: "pending",
      submittedBy: authState.user?.name || "",\极速赛车开奖直播      submittedAt: new Date().toISOString().split("T")[0],
      category: formData.category,
      expectedDelivery: formData.expectedDelivery,