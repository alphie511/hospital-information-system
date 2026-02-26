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
import { DutyScheduleManagement } from "@/components/duty/duty-schedule-management"
import { DutyAnalytics } from "@/components/duty/duty-analytics"
import { DutyIssueToTask } from "@/components/duty/duty-issue-to-task"
import { TaskManagementDashboard } from "@/components/task-management/task-management-dashboard"
import { MeetingManagementDashboard } from "@/components/meeting-management/meeting-management-dashboard"
import { TaskProgressTracking } from "@/components/task-management/task-progress-tracking"

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
        changedAt: "2024-01-16",
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
    priority: "medium",
    status: "approved",
    submittedBy: "李药师",
    submittedAt: "2024-01-14",
    estimatedHours: 24,
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
        changedAt: "2024-01-14",
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
        id: "3-1",
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
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [activeTab, setActiveTab] = useState("overview")
  const [showRequirementForm, setShowRequirementForm] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem("hospital-user")
    if (savedUser) {
      const user = JSON.parse(savedUser)
      user.permissions = getUserPermissions(user)
      setAuthState({ user, isAuthenticated: true })
    }
  }, [])

  const handleLogin = (user: User) => {
    const updatedUser = { ...user, permissions: getUserPermissions(user) }
    setAuthState({ user: updatedUser, isAuthenticated: true })
    localStorage.setItem("hospital-user", JSON.stringify(updatedUser))
  }

  const handleLogout = () => {
    setAuthState({ user: null, isAuthenticated: false })
    localStorage.removeItem("hospital-user")
  }

  const handleUpdateUserRole = (userId: string, roleId: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, roleId, permissions: getUserPermissions({ ...user, roleId }) } : user,
      ),
    )

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
      submittedBy: authState.user?.name || "",
      submittedAt: new Date().toISOString().split("T")[0],
      category: formData.category,
      expectedDelivery: formData.expectedDelivery,
      businessJustification: formData.businessJustification,
      affectedUsers: formData.affectedUsers,
      statusHistory: [
        {
          id: `${Date.now()}-1`,
          status: "pending",
          changedBy: authState.user?.name || "",
          changedAt: new Date().toISOString().split("T")[0],
          comment: "初始提交",
        },
      ],
    }
    setRequirements((prev) => [newRequirement, ...prev])
    setShowRequirementForm(false)
  }

  const handleStatusChange = (requirementId: string, newStatus: string, comment: string) => {
    setRequirements((prev) =>
      prev.map((req) => {
        if (req.id === requirementId) {
          const historyEntry = {
            id: `${requirementId}-${Date.now()}`,
            status: newStatus,
            changedBy: authState.user?.name || "",
            changedAt: new Date().toISOString().split("T")[0],
            comment,
          }
          return {
            ...req,
            status: newStatus,
            statusHistory: [historyEntry, ...(req.statusHistory || [])],
          }
        }
        return req
      }),
    )
  }

  if (!authState.isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  const pendingCount = requirements.filter((r) => r.status === "pending").length
  const reviewingCount = requirements.filter((r) => r.status === "reviewing").length
  const approvedCount = requirements.filter((r) => r.status === "approved").length
  const rejectedCount = requirements.filter((r) => r.status === "rejected").length

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">待处理需求</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{pendingCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">评审中</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{reviewingCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">已批准</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{approvedCount}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">已拒绝</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{rejectedCount}</div>
                </CardContent>
              </Card>
            </div>
            <AnalyticsOverview requirements={requirements} />
          </div>
        )
      case "requirements":
        return (
          <RequirementList
            requirements={requirements}
            onStatusChange={handleStatusChange}
            onSubmit={handleRequirementSubmit}
            showForm={showRequirementForm}
            onToggleForm={() => setShowRequirementForm(!showRequirementForm)}
            departments={departments}
            currentUser={authState.user}
          />
        )
      case "engineers":
        return <EngineerList />
      case "tasks":
        return <TaskProgressDashboard />
      case "assignments":
        return <TaskAssignmentDashboard />
      case "task-management":
        return <TaskManagementDashboard />
      case "task-progress":
        return <TaskProgressTracking />
      case "duty-records":
        return <DutyRecordList />
      case "duty-schedule":
        return <DutyScheduleManagement />
      case "duty-analytics":
        return <DutyAnalytics />
      case "duty-to-task":
        return <DutyIssueToTask />
      case "meetings":
        return <MeetingManagementDashboard />
      case "roles":
        return (
          <PermissionGuard user={authState.user} permission="manage_roles">
            <RoleManagement users={users} onUpdateUserRole={handleUpdateUserRole} />
          </PermissionGuard>
        )
      case "settings":
        return (
          <PermissionGuard user={authState.user} permission="manage_settings">
            <SystemSettings />
          </PermissionGuard>
        )
      case "departments":
        return (
          <PermissionGuard user={authState.user} permission="manage_settings">
            <DepartmentManagement />
          </PermissionGuard>
        )
      case "task-labels":
        return (
          <PermissionGuard user={authState.user} permission="manage_settings">
            <TaskLabelManagement />
          </PermissionGuard>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} user={authState.user} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b bg-background px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold">医院信息管理系统</h1>
          </div>
          <UserMenu user={authState.user} onLogout={handleLogout} />
        </header>
        <main className="flex-1 overflow-auto p-6">{renderContent()}</main>
      </div>
    </div>
  )
}
