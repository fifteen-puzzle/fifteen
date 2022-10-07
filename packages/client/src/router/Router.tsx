import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  MainPage,
  SignupPage,
  AuthPage,
  GameFieldPage,
  LeadersPage,
  ProfilePage,
  EditProfilePage,
  EditPasswordPage,
  ForumPage,
  ForumSubPage,
  RulesPage,
  NotFoundPage,
} from '../pages'
import { ROUTES } from './types'
import { MainLayout } from '../layouts'

export const Router = () => (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainLayout><MainPage /></MainLayout>} />
      <Route path={ROUTES.SIGNUP} element={<MainLayout backUrl={ROUTES.AUTH}><SignupPage /></MainLayout>} />
      <Route path={ROUTES.AUTH} element={<MainLayout backUrl={ROUTES.MAIN}><AuthPage /></MainLayout>} />
      <Route path={ROUTES.GAME_FIELD} element={<GameFieldPage />} />
      <Route path={ROUTES.LEADERS} element={<MainLayout><LeadersPage/></MainLayout>}/>
      <Route path={ROUTES.PROFILE} element={<MainLayout><ProfilePage /></MainLayout>} />
      <Route path={ROUTES.EDIT_PROFILE} element={<MainLayout><EditProfilePage /></MainLayout>} />
      <Route path={ROUTES.EDIT_PASSWORD} element={<MainLayout><EditPasswordPage /></MainLayout>} />
      <Route path={ROUTES.FORUM} element={<MainLayout><ForumPage /></MainLayout>} />
      <Route path={`${ROUTES.FORUM}/:id`} element={<MainLayout><ForumSubPage /></MainLayout>} />
      <Route path={ROUTES.RULES} element={<MainLayout backUrl={ROUTES.MAIN}><RulesPage /></MainLayout>} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )